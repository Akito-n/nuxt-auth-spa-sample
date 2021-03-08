import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  build: {},
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxt/typescript-build'
  ],
  ssr: false,
  css: [],
  env: {},
  head: {
    title: 'nuxt-community/typescript-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A boilerplate to start a Nuxt+TS project quickly' }
    ],
    link: []
  },
  loading: { color: '#0c64c1' },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  plugins: [
    
    '~/plugins/truncate',
    
  ],
  auth: {
    strategies: {
      auth0:{
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUHT0_CLIENTID,
        logoutRedirectUri: 'http://localhost:3000/logout',
      }
    },
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/callback',
      home: '/'
    },
  },
  router: {
    middleware: 'auth'
  },
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: any
  }
}

export default config
