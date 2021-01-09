export default {
  target: 'static',

  head: {
    title: 'lansolo.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/main.css'],

  publicRuntimeConfig: {},

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/date-fns',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  dateFns: {
    locales: ['es', 'fr'],
    defaultLocale: 'en-US',
    format: 'dd/MM/yyyy',
  },

  modules: ['@nuxt/content', '@nuxt/image'],

  tailwindcss: {
    exposeConfig: false,
  },

  content: {},

  build: {
    postcss: {
      plugins: {},
    },
  },

  vue: {
    config: {
      productionTip: false,
    },
  },
}
