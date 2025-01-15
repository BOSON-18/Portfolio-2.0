/** @type {import('tailwindcss').Config} */
import tailwindNoScrollbar from "tailwindcss-no-scrollbar";

export default {
  content: ["./src/**/*/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      caveat: ["Caveat", "cursive"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      backgroundImage: {
        cover: "url('/src/assets/cover.jpeg')",
      },
    },
  },
  plugins: [tailwindNoScrollbar],
};
