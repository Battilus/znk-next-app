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
            sans: ['Atyp Display', ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            's': '0.75rem',
            'sl': '1.062rem',
        },
        lineHeight: {
            '12.6p': '0.787rem',
            '13p': '0.81rem',
            '15.42p': '0.963rem',
            '17p': '1.062rem',
            '18p': '1.125rem',
            '46.26': '2.89rem',
            '21.5': '1.36rem',
        },
        margin: {
            '5.5': '1.375rem',
        },
        padding: {
            '1.3': '0.312rem',
            '1.7': '0.437rem',
            '4.5': '1.125rem',
        },
        height: {
            '14.8': '3.81rem',
            '82.5': '21.12rem',
            '89': '23rem',
            '91.6': '26.9rem',
            '324': '20.25rem',
            '327': '20.43rem',
        },
        maxHeight: {
            '82.5': '21.2rem',
            '89': '23rem',
            '91.6': '26.9rem',
            '324': '20.25rem',
            '327': '20.43rem',
        },
        width: {
            '5.5': '1.375rem',
            '32.1': '21.6rem',
            '32.2': '6.25rem',
            '33.5': '7.5rem',
            '34': '8.4rem',
            '42': '10.5rem',
            '79.7': '19.75rem',
            '98.5': '26.5rem',
            '194': '12.12rem',
            '198': '12.375rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '223p': '13.93rem',
            '33%': '33.3%',
            '324': '20.25rem',
            '327': '20.43rem',
        },
        minWidth: {
            '34': '8.4rem',
            '32.2': '6.25rem',
            '33.5': '7.5rem',
            '48': '12rem',
            '64': '16rem',
            '79.7': '19.75rem',
            '194': '12.12rem',
            '198': '12.375rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '5/6': '83.333333%',
            '33%': '33.3%',
        },
        maxWidth: {
            '34': '8.4rem',
            '32.2': '6.25rem',
            '33.5': '7.5rem',
            '79.7': '19.75rem',
            '152px': '9.5rem',
            '810': '50.6rem',
            '194': '12.12rem',
            '198': '12.375rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '33%': '33.3%',
            '324': '20.25rem',
            '327': '20.43rem',
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
            '250': '250ms',
        },
        backgroundImage: {
            'buro_philosophy': "url('/buro_philosophy.png')",
            'buro_philosophy_hover': "url('/buro_philosophy_hover.png')",
            'buro_command': "url('/buro_command.png')",
            'buro_command_hover': "url('/buro_command_hover.png')",
            'buro_command_hover_2': "url('/buro_command_hover_2.jpg')",
            'buro_achievements': "url('/buro_achievements.png')",
            'buro_achievements_hover': "url('/buro_achievements_hover.png')",
        },
    },
  },
  plugins: [
      plugin(({addUtilities}) => {
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
