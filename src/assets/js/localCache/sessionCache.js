// 设置appCode
const appCode = 'APP-CODE-KEY'
export const sessionAppCode = {
  set (val) {
    sessionStorage.setItem(appCode, val)
  },
  get () {
    return sessionStorage.getItem(appCode)
  },
}

// 免登jwt
const authorization = 'AUTHORIZATION-KEY'
export const sessionAuthorization = {
  set (val) {
    sessionStorage.setItem(authorization, val)
  },
  get () {
    return sessionStorage.getItem(authorization)
  },
  remove () {
    sessionStorage.removeItem(authorization)
  },
}
