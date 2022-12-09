/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        serif:['Abhaya Libre'],
        title:['Della Respira','serif'],
        body:['Abhaya Libre','serif'],
        tag:['EB Garamond','serif'],
        logo:['Chomsky','serif'],
        // logo:['Vast Shadow', 'cursive']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
