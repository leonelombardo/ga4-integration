/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["sans-serif", "system-ui"]
      },
      screens: {
        xs: "450px"
      }
    },
  },
  plugins: [],
}