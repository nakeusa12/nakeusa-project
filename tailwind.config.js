const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        main: {
          primary: '#2348F7',
          darkest: '#2D2D2D',
          dark: '#232428'
        }
      }
    },
  },
  plugins: [],
}
