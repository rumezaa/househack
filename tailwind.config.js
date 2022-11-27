/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-b": "#FF5C00",
        "brown": "#BBA89D",
        "light-b": "#F5B893",
        "slate": "#D9D9D9"
      }
    },
  },
  plugins: [],
}
