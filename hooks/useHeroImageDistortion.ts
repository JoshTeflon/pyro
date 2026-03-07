'use client';

import { useCallback, useEffect, useRef } from 'react';

import { FRAGMENT_SHADER, MAX_TRAIL_POINTS, VERTEX_SHADER } from '@/lib/webgl/hero-distortion-shaders';

type TrailPoint = {
  x: number;
  y: number;
  intensity: number;
  vx: number;
  vy: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const useHeroImageDistortion = (imageSrc: string) => {
  const homeRef = useRef<HTMLElement>(null);
  const landingMediaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const glRef = useRef<WebGLRenderingContext | null>(null);
  const pointUniformRef = useRef<WebGLUniformLocation | null>(null);
  const timeUniformRef = useRef<WebGLUniformLocation | null>(null);
  const coverScaleUniformRef = useRef<WebGLUniformLocation | null>(null);

  const trailRef = useRef<TrailPoint[]>([]);
  const rafRef = useRef<number | null>(null);
  const pointerActiveRef = useRef<boolean>(false);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  const isFinePointerRef = useRef<boolean>(false);
  const startTsRef = useRef<number>(0);
  const textureReadyRef = useRef<boolean>(false);
  const imageAspectRef = useRef<number>(1);

  const stopRenderLoop = useCallback(() => {
    if (rafRef.current !== null) {
      globalThis.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const resizeCanvas = useCallback((imageAspect: number) => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    if (!canvas || !gl || !homeRef.current || !coverScaleUniformRef.current) return;

    const rect = homeRef.current.getBoundingClientRect();
    const dpr = clamp(globalThis.devicePixelRatio ?? 1, 1, 1.75);

    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }

    const canvasAspect = rect.width / rect.height;
    let scaleX = 1;
    let scaleY = 1;

    if (canvasAspect > imageAspect) {
      scaleY = imageAspect / canvasAspect;
    } else {
      scaleX = canvasAspect / imageAspect;
    }

    gl.uniform2f(coverScaleUniformRef.current, scaleX, scaleY);
  }, []);

  const drawFrame = useCallback((timestamp: number) => {
    const gl = glRef.current;
    if (!gl || !pointUniformRef.current || !timeUniformRef.current || !canvasRef.current) {
      stopRenderLoop();
      return;
    }

    if (!startTsRef.current) {
      startTsRef.current = timestamp;
    }

    const pointsArray = new Float32Array(MAX_TRAIL_POINTS * 3);

    trailRef.current = trailRef.current
      .map((point) => ({
        ...point,
        x: point.x + point.vx,
        y: point.y + point.vy,
        intensity: point.intensity * 0.92,
        vx: point.vx * 0.92,
        vy: point.vy * 0.92,
      }))
      .filter((point) => point.intensity > 0.02);

    for (const [index, point] of trailRef.current.slice(0, MAX_TRAIL_POINTS).entries()) {
      pointsArray[index * 3] = point.x;
      pointsArray[index * 3 + 1] = point.y;
      pointsArray[index * 3 + 2] = point.intensity;
    }

    if (textureReadyRef.current) {
      gl.uniform3fv(pointUniformRef.current, pointsArray);
      gl.uniform1f(timeUniformRef.current, (timestamp - startTsRef.current) * 0.001);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    const hasTrail = trailRef.current.length > 0;
    if (pointerActiveRef.current || hasTrail) {
      rafRef.current = globalThis.requestAnimationFrame(drawFrame);
      return;
    }

    if (canvasRef.current) {
      canvasRef.current.style.opacity = '0';
    }

    stopRenderLoop();
  }, [stopRenderLoop]);

  const ensureRenderLoop = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = globalThis.requestAnimationFrame(drawFrame);
  }, [drawFrame]);

  useEffect(() => {
    let isDisposed = false;

    const section = homeRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    isFinePointerRef.current = globalThis.matchMedia('(pointer: fine)').matches;
    if (!isFinePointerRef.current) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });

    if (!gl) return;

    glRef.current = gl;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 0, 0,
      1, -1, 1, 0,
      -1, 1, 0, 1,
      1, 1, 1, 1,
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'a_position');
    const aUv = gl.getAttribLocation(program, 'a_uv');

    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 16, 0);

    gl.enableVertexAttribArray(aUv);
    gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 16, 8);

    pointUniformRef.current = gl.getUniformLocation(program, 'u_points');
    timeUniformRef.current = gl.getUniformLocation(program, 'u_time');
    coverScaleUniformRef.current = gl.getUniformLocation(program, 'u_coverScale');

    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 0])
    );

    const sampler = gl.getUniformLocation(program, 'u_image');
    gl.uniform1i(sampler, 0);
    gl.clearColor(0, 0, 0, 0);

    const image = new globalThis.Image();
    image.src = imageSrc;
    image.decoding = 'async';

    const onImageLoad = () => {
      if (isDisposed || !texture || !glRef.current) return;

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      imageAspectRef.current = image.width / image.height;
      textureReadyRef.current = true;
      resizeCanvas(imageAspectRef.current);

      if (pointerActiveRef.current) {
        ensureRenderLoop();
      }
    };

    image.onload = onImageLoad;

    if (image.complete && image.naturalWidth > 0) {
      onImageLoad();
    }

    const onResize = () => {
      if (imageAspectRef.current > 0) {
        resizeCanvas(imageAspectRef.current);
      }
    };

    globalThis.addEventListener('resize', onResize, { passive: true });

    return () => {
      isDisposed = true;
      image.onload = null;

      stopRenderLoop();
      globalThis.removeEventListener('resize', onResize);

      trailRef.current = [];
      lastPointerRef.current = null;
      textureReadyRef.current = false;

      gl.deleteBuffer(vertexBuffer);
      gl.deleteTexture(texture);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);

      pointUniformRef.current = null;
      timeUniformRef.current = null;
      coverScaleUniformRef.current = null;
      glRef.current = null;
    };
  }, [ensureRenderLoop, imageSrc, resizeCanvas, stopRenderLoop]);

  const onPointerEnter = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (!isFinePointerRef.current || !canvasRef.current || !homeRef.current) return;

    const rect = homeRef.current.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = 1 - clamp((event.clientY - rect.top) / rect.height, 0, 1);

    trailRef.current.unshift({
      x,
      y,
      intensity: 0.2,
      vx: 0,
      vy: 0,
    });

    lastPointerRef.current = { x, y };

    pointerActiveRef.current = true;
    canvasRef.current.style.opacity = '1';
    ensureRenderLoop();
  }, [ensureRenderLoop]);

  const onPointerLeave = useCallback(() => {
    pointerActiveRef.current = false;
    lastPointerRef.current = null;
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (!isFinePointerRef.current || !homeRef.current || !canvasRef.current) return;

    const rect = homeRef.current.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = 1 - clamp((event.clientY - rect.top) / rect.height, 0, 1);

    // If pointer entered while the section mounted under the cursor,
    // onPointerEnter may never fire. Activate on first movement.
    if (!pointerActiveRef.current) {
      pointerActiveRef.current = true;
      canvasRef.current.style.opacity = '1';

      trailRef.current.unshift({
        x,
        y,
        intensity: 0.18,
        vx: 0,
        vy: 0,
      });
    }

    const prev = lastPointerRef.current;
    const dx = prev ? x - prev.x : 0;
    const dy = prev ? y - prev.y : 0;
    const speed = clamp(Math.hypot(dx, dy) * 18, 0.04, 0.55);

    trailRef.current.unshift({
      x,
      y,
      intensity: speed,
      vx: dx * 0.14,
      vy: dy * 0.14,
    });

    if (trailRef.current.length > MAX_TRAIL_POINTS) {
      trailRef.current.length = MAX_TRAIL_POINTS;
    }

    lastPointerRef.current = { x, y };
    ensureRenderLoop();
  }, [ensureRenderLoop]);

  return {
    homeRef,
    landingMediaRef,
    canvasRef,
    onPointerEnter,
    onPointerMove,
    onPointerLeave,
  };
};

export default useHeroImageDistortion;