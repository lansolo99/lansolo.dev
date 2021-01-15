export default {
  target: 'static',

  head: {
    title: 'lansolo.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Designs and front-end journal of Stéphane Changarnier | Front-end developer &amp; designer',
      },
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
    defaultLocale: 'en-US',
    format: 'MM/dd/yyyy',
  },

  modules: ['@nuxt/content', '@nuxt/image'],

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.tags = [...document.tags, document.type]
      }
    },
  },

  image: {
    sizes: [320, 420, 768, 1024, 1200],
  },

  tailwindcss: {
    exposeConfig: false,
  },

  content: {
    nestedProperties: ['posts.tags'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-duotone-dark.css',
      },
    },
  },

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('posts').only(['path']).fetch()
      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },

  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },

  vue: {
    config: {
      productionTip: false,
    },
  },
}
