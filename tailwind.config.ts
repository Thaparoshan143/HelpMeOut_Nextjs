import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: 
      {
        background : "#eee",
        foreground : "#fff",
        theme : "#A020F0",
        "theme-cont" : "#EA5A0C",
        "theme-a" : "#A020F0bb",
        "theme-alt" : "#67159b"
      },
      fontFamily : 
      {
        "main" : 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
        "main-alt" : '"Barlow Condensed", sans-serif;',
      },
      fontSize : 
      {
        "sup-tit" : "1.35rem",
        "title" : "1.2rem",
        "sub-tit" : "1.05rem",
        "sup-head" : "2.3rem",
        "heading" : "1.9rem",
        "sub-head" : "1.5rem",
        "small" : "0.9rem",
      },
      margin : 
      {
        "small" : "0.1rem",
        "md" : "0.1rem",
      },
      padding : 
      {
        "small" : "0.1rem",
        "md" : "0.2rem",
      },
    },
  },
  plugins: [],
};
export default config;
