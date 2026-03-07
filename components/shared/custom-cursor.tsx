'use client';

import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], [data-cursor-interact], input, textarea, select';

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globalThis.matchMedia('(pointer: fine)').matches) return;

    const root = globalThis.document.documentElement;
    root.classList.add('has-custom-cursor');

    let targetX = globalThis.innerWidth / 2;
    let targetY = globalThis.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let dotX = targetX;
    let dotY = targetY;

    let rafId = 0;

    const setPointerTarget = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const interactive = (event.target as HTMLElement | null)?.closest(INTERACTIVE_SELECTOR);
      root.dataset.cursorState = interactive ? 'hover' : 'default';
    };

    const setPressed = () => {
      root.dataset.cursorPressed = 'true';
    };

    const clearPressed = () => {
      root.dataset.cursorPressed = 'false';
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      dotX += (targetX - dotX) * 0.32;
      dotY += (targetY - dotY) * 0.32;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }

      rafId = globalThis.requestAnimationFrame(tick);
    };

    globalThis.addEventListener('mousemove', setPointerTarget, { passive: true });
    globalThis.addEventListener('mousedown', setPressed, { passive: true });
    globalThis.addEventListener('mouseup', clearPressed, { passive: true });

    root.dataset.cursorState = 'default';
    root.dataset.cursorPressed = 'false';

    rafId = globalThis.requestAnimationFrame(tick);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      globalThis.removeEventListener('mousemove', setPointerTarget);
      globalThis.removeEventListener('mousedown', setPressed);
      globalThis.removeEventListener('mouseup', clearPressed);

      delete root.dataset.cursorState;
      delete root.dataset.cursorPressed;
      root.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className='cursor-ring' />
      <div ref={dotRef} className='cursor-dot' />
    </>
  );
};

export default CustomCursor;
