import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": 'rgb(var(--background-rgb))',
        "primary": 'rgb(var(--foreground-rgb))'
      }
    },
  },
  plugins: [],
};
export default config;
