import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'body': 'var(--body-clr)',
        'main': 'var(--main-clr)',
        'primary': 'var(--primary-clr)',
        'grey': 'var(--grey-clr)',
        'overlay': 'var(--overlay-clr)',
        'grey-overlay': 'var(--grey-overlay-clr)',
        'danger-overlay': 'var(--danger-overlay-clr)',
      },
      borderRadius: {
        '4xl': '32px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      keyframes: {
        'jello-horizontal': {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '60%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '70%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        'glow': {
          'from': { 'text-shadow': '0 0 8px currentColor' },
          'to': { 'text-shadow': '0 0 16px currentColor, 0 0 4px currentColor' },
        },
      },
      animation: {
        'jello-horizontal': 'jello-horizontal 0.9s both',
        'glow': 'glow 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
