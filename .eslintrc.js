module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['prettier', 'cypress'],
  rules: {
    'no-console': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-prop-types': 'off',
    'no-unused-vars': 'off',
    'no-throw-literal': 'off',
    'no-useless-catch': 'off',
    'vue/no-v-html': 'off',
  },
}
