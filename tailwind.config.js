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
          gray: '#585858',
          whiteGray: '#D9D9D9',
          dark: '#232428',
          secondDark: '#27282C'
        }
      }
    },
  },
  plugins: [],
}
