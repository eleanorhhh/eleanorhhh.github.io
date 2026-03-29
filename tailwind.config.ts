/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      pressStart: ['"Press Start 2P"', 'cursive'],
    },},
  },
  plugins: [],
}
