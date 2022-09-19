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
          blue: '#2140F4',
          dark: '#272727',
          whiteGray: '#D9D9D9',
          secondDark: '#27282C'
        }
      }
    },
  },
  plugins: [],
}
