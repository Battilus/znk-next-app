/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            whiteSmoke: '#F4F4F4',
            silver: '#BCBCBC',
            matterhorn: '#575757'
        },
        fontFamily: {
            sans: ['Atyp Display', ...defaultTheme.fontFamily.sans]
        },
        width: {
            '42': '10.5rem',
        },
        maxWidth: {
            '152px': '152px',
        },
        translate: {
            '38': '8.5rem'
        },
    },
  },
  plugins: [],
}
