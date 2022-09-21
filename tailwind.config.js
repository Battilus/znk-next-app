/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
            '34': '8.4rem',
            '42': '10.5rem',
            '79.7': '19.75rem',
            '98.5': '26.5rem',
            '194': '12.12rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '223p': '223px'
        },
        margin: {
            '5.5': '22px',
        },
        padding: {
            '1.3': '5px',
            '1.7': '7px',
        },
        minWidth: {
            '34': '8.4rem',
            '48': '12rem',
            '64': '16rem',
            '79.7': '19.75rem',
            '194': '12.12rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '5/6': '83.333333%'
        },
        maxWidth: {
            '34': '8.4rem',
            '79.7': '19.75rem',
            '152px': '152px',
            '810': '50.6rem',
            '194': '12.12rem',
            '314': '19.6rem',
            '886': '55.37rem',
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
        transitionProperty: {
            width: 'width',
        },
        transitionDuration: {
            '0': '0ms',
        },
    },
  },
  plugins: [
      plugin(({addUtilities, addComponents, e, prefix, config}) => {
          addUtilities({
              '.horizontal-tb': {
                  writingMode: 'horizontal-tb',
              },
              '.vertical-rl': {
                  writingMode: 'vertical-rl',
              },
              '.vertical-lr': {
                  writingMode: 'vertical-lr',
              },
          })
      })
  ],
}
