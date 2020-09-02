import * as Cookies from 'js-cookie'

/**
 * 根据cookie kye获取cookie
 * @param key {string} cookiekey
 */
function getCookie(key: string) {
  return Cookies.get(key)
}

/**
 * 设置cookie
 * @param key cookie key
 * @param token 
 */
function setCookie(key: string, token: string) {
  return Cookies.set(key, token)
}

/**
 * 移除cookie
 * @param key 
 */
function removeCookie(key: string) {
  return Cookies.remove(key)
}

export default {
  getCookie,
  setCookie,
  removeCookie
}