/** @type {import('tailwindcss').Config} */
export default {
  
  
  content: [
    "./src/**/*/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      caveat: ["Caveat", 'cursive'],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      'cover':"url('/src/assets/cover.jpeg')"
    },
  },
  plugins: [require('tailwindcss-no-scrollbar')],
}