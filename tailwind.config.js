/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ComicNeue: ['Comic Neue']
      },
      colors: {
        "primary": "#e1d7d5",
        "secondary": "#CFBDBA",
        "tertiary": "#8f7e7c"
      }
    },
  },
  plugins: [],
}
