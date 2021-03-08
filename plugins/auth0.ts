import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'
import queryString from 'query-string'
import nuxtConfig from '~/nuxt.config'

const config = nuxtConfig.auth0

class Auth0Util {
  getQueryParams() {
    return queryString.parse(location.hash)
  }

  // eslint-disable-next-line camelcase
  setTokenToLocalStorage({ access_token, id_token, expires_in }: any) {
    const localStorage = window.localStorage
    localStorage.setItem('accessToken', access_token)
    localStorage.setItem('idToken', id_token)
    localStorage.setItem(
      'expiresAt',
      // eslint-disable-next-line camelcase
      (expires_in * 1000 + new Date().getTime()).toString()
    )
    localStorage.setItem('user', JSON.stringify(jwtDecode(id_token)))
  }

  setTokenByQuery(): void {
    this.setTokenToLocalStorage(this.getQueryParams())
  }

  showLock(container: any) {
    const lock = new Auth0Lock(config.client_id, config.domain, {
      container,
      closable: false,
      auth: {
        responseType: 'token id_token',
        redirectUrl: this.getBaseUrl() + '/callback',
        params: {
          scope: 'openid profile email'
        }
      }
    })

    lock.show()
  }

  isAuthenticated(): boolean {
    const expiresAt = window.localStorage.getItem('expiresAt')
    if (!expiresAt) {
      return false
    }
    return new Date().getTime() < Number(expiresAt)
  }

  logOut() {
    const localStorage = window.localStorage
    localStorage.removeItem('accessToken')
    localStorage.removeItem('idToken')
    localStorage.removeItem('expiresAt')
    localStorage.removeItem('user')
  }

  getUserData() {
    const userString = window.localStorage.getItem('user')
    return userString ? JSON.parse(userString) : null
  }

  getBaseUrl() {
    return `${window.location.protocol}//${window.location.host}`
  }
}

export default (
  context: any,
  inject: (arg0: string, arg1: Auth0Util) => void
) => {
  inject('auth0', new Auth0Util())
}
