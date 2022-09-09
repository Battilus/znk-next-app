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
        fontSize: {
            's': '12px'
        },
        lineHeight: {
            '12.6p': '12.6px',
            '13p': '13px',
            '15.42p': '15.42px',
            '17p': '17px',
            '18p': '18px',
            '105': '105%'
        },
        height: {
            '14.8': '3.81rem',
            '82.5': '21.12rem',
            '89': '23rem',
            '91.6': '26.9rem',
        },
        maxHeight: {
            '82.5': '21.2rem',
            '89': '23rem',
            '91.6': '26.9rem',
        },
        width: {
            '5.5': '22px',
            '32.1': '21.6rem',
            '42': '10.5rem',
            '98.5': '26.5rem',
        },
        margin: {
            '5.5': '22px',
        },
        padding: {
            '1.3': '5px',
            '1.7': '7px',
        },
        maxWidth: {
            '152px': '152px',
        },
        zIndex: {
            '15': '15',
            '99': '99',
            '999': '999',
        },
        translate: {
            '38': '8.5rem',
            '42': '10.5rem',
            '56': '13.5rem',
            '57': '14rem',
            '58': '14.5rem',
        },
    },
  },
  plugins: [],
}
