import fs from 'fs'
import path from 'path'

export default {
  target: 'static',

  head: {
    title: 'lansolo.dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Designs and front-end journal of Stéphane Changarnier | Front-end developer &amp; designer',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/karla-v14-latin-500.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/karla-v14-latin-500.woff2',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/karla-v14-latin-700.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/karla-v14-latin-700.woff2',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/karla-v14-latin-regular.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/karla-v14-latin-regular.woff2',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/NeueMachina-Ultrabold.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'crossorigin',
        type: 'font/woff',
        href: 'fonts/NeueMachina-Ultrabold.woff2',
      },
    ],
  },

  css: ['~/assets/css/main.css', 'loaders.css/loaders.min.css'],

  pageTransition: 'page',

  publicRuntimeConfig: {},

  plugins: ['@/plugins/focus-visible'],

  components: true,

  buildModules: [
    '@nuxtjs/date-fns',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'G-9NTJCGKW7X',
  },

  dateFns: {
    defaultLocale: 'en-US',
    format: 'MM/dd/yyyy',
  },

  modules: ['@nuxt/content', '@nuxtjs/cloudinary'],

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_KEY_SECRET,
    useComponent: true,
  },

  tailwindcss: {
    exposeConfig: false,
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.tags = [...document.tags, document.type]
      }
    },
    build: {
      before() {
        const { $cloudinary } = require('@nuxtjs/cloudinary')
        const folders = ['about', 'posts']
        folders.forEach((folder) => {
          const assetsFolder = path.join(__dirname, `static/img/${folder}`)
          fs.readdir(assetsFolder, async (err, files) => {
            if (err) return
            /* Upload to Cloudinary */
            const uploadedAssets = await Promise.all(
              files.map((file) => {
                return $cloudinary.upload(path.join(assetsFolder, file), {
                  public_id: file.split('.')[0],
                  folder: `lansolo.dev/${folder}`,
                })
              })
            )
          })
        })
        console.log('assets upload complete')
      },
    },
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
    ignore: [
      'static', // dir.static
    ],
  },

  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-css-variables': {},
      },
    },
  },

  vue: {
    config: {
      productionTip: false,
    },
  },
}
