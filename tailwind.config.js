module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: true,
  purge: {
    options: {
      safelist: ['nuxt-content-container'],
    },
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
          },
        },
      },
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
          900: '#170f2b',
        },
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '5/12': '41.666667%',
        '6/12': '50%',
        'c56%': '56.25%',
        full: '100%',
      },
      maxWidth: {
        680: '680px',
        1000: '1000px',
        1920: '1920px',
      },
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'focus-visible',
    ],
    outline: ['responsive', 'focus-within', 'focus', 'focus-visible'],
  },
  plugins: [require('@tailwindcss/typography')],
}
