/**
 * sessionStorage存储函数工具库
 */

export function getItem(key: string) {
  if (!key) {
    console.warn('getItem需要输入正确的key');
    return
  }

  if (sessionStorage) {
    return sessionStorage.getItem(key)
  }
}

export function setItem(key: string, value: any) {
  if (!key) {
    console.warn('setItem需输入正确的key');
    return
  }

  if (value === undefined) {
    console.warn('setItem需输入正确的value');
    return
  }

  if (sessionStorage) {
    sessionStorage.setItem(key, value)
  }
}

export function removeItem(key: string) {
  if (!key) {
    console.warn('removeItem需输入正确的key');
    return
  }

  if (sessionStorage) {
    sessionStorage.removeItem(key)
  }
}

export function clear() {
  if (sessionStorage) {
    sessionStorage.clear()
  }
}

export default {
  getItem,
  setItem,
  removeItem,
  clear
}
