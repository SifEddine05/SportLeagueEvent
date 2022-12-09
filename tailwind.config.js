/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Spantaran": ['Spantaran', 'serif'], 
        "Consolas" :["Consolas",'serif']
      },
    },
  },
  plugins: [require("daisyui")],
}
