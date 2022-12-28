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
            'xsm': '0.9756rem', //15.61px
            'sl': '1.062rem',
            '0.8vw': '0.8vw',
            '0.83v': '0.83vw',
            '0.97v': '0.97vw', //14
            '1vw': '1vw',
            '1.11v': '1.11vw', //16
            '1.18v': '1.18vw', //17
            '1.39v': '1.39vw', //20
            '1.67v': '1.67vw', //24
            '2.5v': '2.5vw', //36
        },
        lineHeight: {
            '12.6p': '0.787rem',
            '13p': '0.81rem',
            '15.42p': '0.963rem',
            '17p': '1.062rem',
            '18p': '1.125rem',
            '46.26': '2.89rem',
            '21.5': '1.36rem',
            '23': '1.5rem',
            '1vw': '1vw',
            '0.9v': '0.9vw', //13
            '1.07v': '1.07vw',
            '1.11v': '1.11vw', //16
            '1.18v': '1.18vw', //17
            '1.25v': '1.25vw',
            '1.39v': '1.39vw', //20
            '1.67v': '1.67vw', //24
            '1.94v': '1.94vw', //28
            '1.51v': '1.51vw',
            '3.21v': '3.21vw',
        },
        margin: {
            '5.5': '1.375rem',
            '1.11v': '1.11vw',
            '2.22v': '2.22vw', //32
            '2.5v': '2.5vw', //36
        },
        marginLeft: {
            '1.11v': '1.11vw',
            '2.22v': '2.22vw', //32
            '2.5v': '2.5vw', //36
        },
        marginRight: {
            '1.11v': '1.11vw',
            '2.22v': '2.22vw', //32
            '2.5v': '2.5vw', //36
        },
        marginBottom: {
            '0.14v': '0.14vw',
            '0.42v': '0.42vw', //6
            '2.22v': '2.22vw', //32
            '2.5v': '2.5vw', //36
        },
        marginTop: {
            '1.11v': '1.11vw', //16
            '2.22v': '2.22vw', //32
            '2.5v': '2.5vw', //36
        },
        padding: {
            '0.14v': '0.14vw',
            '1.3': '0.312rem',
            '1.7': '0.437rem',
            '4.5': '1.125rem',
            '0.35v': '0.35vw',
            '0.49v': '0.49vw',
            '0.56v': '0.56vw', //8
            '0.69v': '0.69vw',
            '1.11v': '1.11vw', //16
            '1.25v': '1.25vw', //18
            '1.67v': '1.67vw', //24
            '1.94v': '1.94vw', //28
            '2.22v': '2.22vw', //32
            '2.78v': '2.78vw',
        },
        paddingLeft: {
            '1.3': '0.312rem',
            '1.7': '0.437rem',
            '0.14v': '0.14vw',
            '0.35v': '0.35vw',
            '0.49v': '0.49vw',
            '0.56v': '0.56vw', //8
            '0.69v': '0.69vw',
            '1.11v': '1.11vw', //16
            '1.25v': '1.25vw', //18
            '1.39v': '1.39vw', //20
            '1.67v': '1.67vw', //24
            '1.94v': '1.94vw', //28
            '2.22v': '2.22vw', //32
            '2.78v': '2.78vw',
        },
        paddingRight: {
            '1.3': '0.312rem',
            '1.7': '0.437rem',
            '0.14v': '0.14vw',
            '0.35v': '0.35vw',
            '0.49v': '0.49vw',
            '0.56v': '0.56vw', //8
            '0.69v': '0.69vw',
            '1.11v': '1.11vw', //16
            '1.25v': '1.25vw', //18
            '1.39v': '1.39vw', //20
            '1.67v': '1.67vw', //24
            '1.94v': '1.94vw', //28
            '2.22v': '2.22vw', //32
            '2.78v': '2.78vw',
        },
        paddingBottom: {
            '1.3': '0.312rem',
            '1.7': '0.437rem',
            '0.14v': '0.14vw',
            '0.35v': '0.35vw',
            '0.49v': '0.49vw',
            '0.56v': '0.56vw', //8
            '0.69v': '0.69vw',
            '1.11v': '1.11vw', //16
            '1.25v': '1.25vw', //18
            '1.39v': '1.39vw', //20
            '1.67v': '1.67vw', //24
            '1.94v': '1.94vw', //28
            '2.22v': '2.22vw', //32
            '2.78v': '2.78vw',
        },
        paddingTop: {
            '1.3': '0.312rem',
            '1.7': '0.437rem',
            '0.14v': '0.14vw',
            '0.35v': '0.35vw',
            '0.49v': '0.49vw',
            '0.56v': '0.56vw', //8
            '0.69v': '0.69vw',
            '1.11v': '1.11vw', //16
            '1.25v': '1.25vw', //18
            '1.39v': '1.39vw', //20
            '1.67v': '1.67vw', //24
            '1.94v': '1.94vw', //28
            '2.22v': '2.22vw', //32
            '2.78v': '2.78vw',
        },
        height: {
            '2.4': '0.5625rem', //9
            '2.7': '0.6875rem', //11
            '3.2': '0.8125rem', //13
            '0.63v': '0.63vw', //9
            '0.76v': '0.76vw', //11
            '0.83v': '0.83vw', //12
            '0.9v': '0.9vw', //13
            '0.97v': '0.97vw', //14
            '1.11v': '1.11vw', //16
            '1.67v': '1.67vw', //24
            '2.22v': '2.22vw', //32
            '3.19v': '3.19vw', //46
            '3.68v': '3.68vw', //53
            '4.44v': '4.44vw', //64
            '4.51v': '4.51vw', //65
            '5.16v': '5.16vw', //74.33
            '1.3v': '1.3vh', //16
            '2.6v': '2.6vh', //32
            '5.2v': '5.2vh', //64
        },
        maxHeight: {
            '28.89v': '28.89vw', //416
        },
        width: {
            '2.4': '0.5625rem', //9
            '2.7': '0.6875rem', //11
            '3.2': '0.8125rem', //13
            '33.5': '7.5rem',
            '42': '10.5rem',
            '66': '4.125rem',
            '79.7': '19.75rem',
            '98.5': '26.5rem',
            '194': '12.12rem',
            '198': '12.375rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '223p': '13.93rem',
            '33%': '33.3%',
            '480': '30rem',
            '0.63v': '0.63vw', //9
            '0.76v': '0.76vw', //11
            '0.83v': '0.83vw', //12
            '0.9v': '0.9vw', //13
            '0.97v': '0.97vw', //14
            '1.67v': '1.67vw', //24
            '2.22v': '2.22vw', //32
            '4.58v': '4.58vw', //66
            '8.33v': '8.33vw',
            '11.67v': '11.67vw',
            '13.33v': '13.33vw', //192
            '13.75v': '13.75vw',
            '17.78v': '17.78vw',
            '29.44v': '29.44vw', //424
        },
        minWidth: {
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
            '8.33v': '8.33vw',
            '13.33v': '13.33vw', //192
            '13.75v': '13.75vw',
        },
        maxWidth: {
            '33.5': '7.5rem',
            '79.7': '19.75rem',
            '152px': '9.5rem',
            '810': '50.6rem',
            '194': '12.12rem',
            '198': '12.375rem',
            '314': '19.6rem',
            '886': '55.37rem',
            '33%': '33.3%',
            '8.33v': '8.33vw',
            '42.84v': '42.84vw', //616.96
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
            '9.44v': '9.44vw',
            '11.67v': '11.67vw',
            '15.56v': '15.56vw',
        },
        transitionProperty: {
            width: 'width',
        },
        transitionDuration: {
            '0': '0ms',
            '250': '250ms',
        },
        gap: {
            '8.2': '2.125rem', //34
            '0.14v': '0.14vw', //2
            '0.28v': '0.28vw', //4
            '0.42v': '0.42vw', //6
            '0.56v': '0.56vw', //8
            '0.97v': '0.97vw', //14
            '1.11v': '1.11vw', //16
            '1.39v': '1.39vw', //20
            '2.22v': '2.22vw', //32
            '2.36v': '2.36vw', //34
            '2.78v': '2.78vw',
        },
        bottom: {
            '1.39v': '1.39vw', //20
            '12.78v': '12.78vw', //184
        },
        top: {
            '18.89v': '18.89vw', //272
            '22.22v': '22.22vw', //320
            '33.89v': '33.89vw', //488
        },
        left: {
            '1.39v': '1.39vw', //20
            '10v': '10vw', //144
            '15.89v': '15.89vw', //228.8
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

//1440x1231.5
