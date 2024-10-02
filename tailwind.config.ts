import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "theme" : "#A020F0",
        "theme-cont" : "#EA5A0C",
        "theme-a" : "#A020F077",
        "theme-alt" : "#800080"
      },
      fontFamily : 
      {
        "main" : 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
      }
    },
  },
  plugins: [],
};
export default config;
