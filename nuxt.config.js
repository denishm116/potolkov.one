export default {

  mode: 'universal',

  target: 'server',

  head: {
    htmlAttrs: {
      lang: 'ru-Ru'
    },
    title: "Натяжные потолки в Краснодаре" || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],

  },

  css: ['@/assets/css/ress.css', '@/assets/css/style.css',
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  plugins: [
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/axios',
    './plugins/scroll',
    './plugins/v-mask.js',
    {src: './plugins/vuejs-clipper.js', ssr: false},
    {src: './plugins/TiptapVuetify', mode: 'client'},
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post', propertyName: 'token'},
          user: {url: '/home', method: 'get', propertyName: 'user'},
          logout: {url: '/auth/logout', method: 'post'},

        },
      }
    },
    redirect: {
      login: '/login',
      home: '/admin',
    },
  },
  components: true,

  buildModules: [
    '@nuxtjs/google-analytics',
    ['@nuxtjs/vuetify', { /* module options */}]
  ],
  googleAnalytics: {
    id: 'UA-186758138-1'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    ['@nuxtjs/yandex-metrika',
      {
        id: '69918457',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
  ],
  env: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://api.potolkov.one/'
        : 'https://api.potolkov.shop/'
  },

  axios:
    {
      baseURL: process.env.NODE_ENV === 'development'
        ? 'http://api.potolkov.one/api'
        : 'https://api.potolkov.shop/api'
    }
  ,

  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify']
  }
}
