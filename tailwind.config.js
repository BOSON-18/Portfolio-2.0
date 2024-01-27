/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'cover':"url('/src/assets/cover.jpeg')"
    },
  },
  plugins: [require('tailwindcss-no-scrollbar')],
}