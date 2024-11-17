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
        "main": 'var(--main-clr)',
        "primary": 'var(--primary-clr)',
        "body": 'var(--body-clr)',
      },
      fontFamily: {
        "geist-mono": ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
