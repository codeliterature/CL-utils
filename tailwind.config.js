/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        Custom : ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        primary: "#212121",
        dark: "#b6fffa",
        light: "#ffa447"
      },
    },
  },
  plugins: [],
}