// import AuthOLock from 'auth0-lock'
// import NuxtConfig from '~/nuxt.config'
// import type { Plugin } from '@nuxt/types'

// declare module 'vue/types/vue' {
//     interface Vue {
//       $auth0: any
//     }
// }

// const config: {clientID: string, domain: string} = NuxtConfig.auth0
// const BaseUrl = `${window.location.protocol}//${window.location.host}`

// const Auth0Util = (container: any): void => {
//   const lock = new AuthOLock(config.clientID, config.domain, {
//       container,
//       closable: false,
//       auth: {
//         responseType: 'token id_token',
//         redirectUrl: BaseUrl ,
//         params: {
//           scope: 'openid profile email'
//         }
//       }
//     })
//     return lock.show()
// }

// // class AuthUtil {
// //   showLock(container: any): void {
// //     const lock = new AuthOLock(config.clientID, config.domain, {
// //       container,
// //       closable: false,
// //       auth: {
// //         responseType: 'token id_token',
// //         redirectUrl: this.getBaseUrl() + '/callback',
// //         params: {
// //           scope: 'openid profile email'
// //         }
// //       }
// //     })
// //     lock.show()
// //   }

// //   getBaseUrl(): string {
// //     return `${window.location.protocol}//${window.location.host}`
// //   }
// // }

// const authPlugin: Plugin = (_context, inject) => {
//   inject('auth0', Auth0Util)
// }

// export default authPlugin
// // export default (
// //   _context: any,
// //   inject: (arg0: string, arg1: AuthUtil) => void
// // ): void => {
// //   inject('auth0', Auth0Util)
// // }
