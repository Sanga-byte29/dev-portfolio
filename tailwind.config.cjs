/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          inter: ['inter','serif'],
        }
      }
    },
  theme: {
    extend: {},
  },
  plugins: [],
}
