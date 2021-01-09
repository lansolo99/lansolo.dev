module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: true,
  purge: [],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
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
