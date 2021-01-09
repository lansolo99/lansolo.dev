module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
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
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-prop-types': 'off',
    'no-unused-vars': 'off',
    'no-throw-literal': 'off',
    'no-useless-catch': 'off',
  },
}
