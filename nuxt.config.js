export default {
  target: 'server',

  head: {
    title: 'storylunch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@assets/css/snow.css', '@/assets/css/loaders.css'],

  publicRuntimeConfig: {
    fireEnv: process.env.FIREBASE_ENV,
    algoliaAppId: process.env.ALGOLIA_APPLICATION_ID,
    algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
  },

  plugins: [
    '@/plugins/vue-formulate',
    '@/plugins/vue-instantsearch.client',
    '@/plugins/vue-js-modal.js',
    {
      src: '@/plugins/v-click-outside.js',
      ssr: false,
    },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/svg'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/firebase',
    '@nuxtjs/recaptcha',
    '@nuxtjs/cloudinary',
  ],

  tailwindcss: {
    exposeConfig: true,
  },

  cloudinary: {
    cloudName: 'lansolo99',
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_KEY_SECRET,
    useComponent: true,
  },

  recaptcha: {
    hideBadge: true,
    siteKey: '6LfuZ-oZAAAAAMMPRagqzr8jtaDvjKbnvzoJYcoe',
    version: 3,
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      // dev: false,
      dev: process.env.NODE_ENV === 'development',
    },
  },

  firebase: {
    lazy: false,
    config: {
      development: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASEURL,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGGINBSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: null,
        algolia: {
          app_id: process.env.ALGOLIA_APPLICATION_ID,
          api_key: process.env.ALGOLIA_API_KEY,
          search_key: process.env.ALGOLIA_SEARCH_API_KEY,
        },
      },
      production: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASEURL,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGGINBSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: null,
      },
    },
    onFirebaseHosting: false,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'auth/setCurrentUser',
        },
        ssr: true,
        emulatorPort: process.env.FIREBASE_ENV === 'emulators' ? 9099 : false,
      },
      firestore: {
        emulatorPort: process.env.FIREBASE_ENV === 'emulators' ? 8080 : false,
      },
      functions: {
        location: 'europe-west1',
        emulatorPort: process.env.FIREBASE_ENV === 'emulators' ? 12345 : false,
      },
      storage: true,
      performance: true,
    },
  },

  serverMiddleware: {
    '/api': '~/api',
  },

  axios: {
    credentials: true,
    browserBaseURL: '/',
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
      },
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {},
    },
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },

  render: {
    bundleRenderer: {
      runInNewContext: false,
    },
  },

  vue: {
    config: {
      productionTip: false,
    },
  },
}
