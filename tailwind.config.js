module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: true,
  purge: [],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      scale: {
        60: '.6',
      },
      inset: {
        '1/2': '50%',
      },
      fontFamily: {
        body: ['Karla', 'sans-serif'],
        heading: ['Neue Machina', 'sans-serif'],
      },
      colors: {
        primary: {
          400: '#CE9DFA',
          500: '#8138C2',
        },
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        full: '100%',
      },
    },
  },
  variants: {},
  plugins: [],
}
