export const MAX_TRAIL_POINTS = 20;

export const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute vec2 a_uv;
  varying vec2 v_uv;

  void main() {
    v_uv = a_uv;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

export const FRAGMENT_SHADER = `
  precision mediump float;

  varying vec2 v_uv;

  uniform sampler2D u_image;
  uniform vec2 u_coverScale;
  uniform vec3 u_points[${MAX_TRAIL_POINTS}];
  uniform float u_time;

  void main() {
    vec2 uv = v_uv;
    vec2 coverUv = (uv - 0.5) * u_coverScale + 0.5;
    vec2 displacement = vec2(0.0);

    for (int i = 0; i < ${MAX_TRAIL_POINTS}; i++) {
      vec3 p = u_points[i];
      if (p.z <= 0.0001) {
        continue;
      }

      vec2 delta = coverUv - p.xy;
      float dist = length(delta) + 0.00001;
      float radius = mix(0.065, 0.16, p.z);
      float falloff = exp(-(dist * dist) / (radius * radius));
      vec2 dir = delta / dist;

      float pulse = sin((dist * 86.0) - (u_time * 3.2));
      displacement += dir * falloff * (0.012 * p.z + pulse * 0.0016 * p.z);
    }

    vec2 sampledUv = clamp(coverUv + displacement, 0.001, 0.999);
    vec4 color = texture2D(u_image, sampledUv);

    gl_FragColor = color;
  }
`;
