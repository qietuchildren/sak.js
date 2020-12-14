/**
 * String Utils
 */

import base64ArrayBuffer from './base64ArrayBuffer'

/**
 * 将string转为bytes数组
 * @param {String} str
 * @returns {Array} bytes
 */
function stringToByte(str: string) {
  let bytes = []
  let len, c
  len = str.length
  for (let i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if (c >= 0x010000 && c <= 0x10ffff) {
      bytes.push(((c >> 18) & 0x07) | 0xf0)
      bytes.push(((c >> 12) & 0x3f) | 0x80)
      bytes.push(((c >> 6) & 0x3f) | 0x80)
      bytes.push((c & 0x3f) | 0x80)
    } else if (c >= 0x000800 && c <= 0x00ffff) {
      bytes.push(((c >> 12) & 0x0f) | 0xe0)
      bytes.push(((c >> 6) & 0x3f) | 0x80)
      bytes.push((c & 0x3f) | 0x80)
    } else if (c >= 0x000080 && c <= 0x0007ff) {
      bytes.push(((c >> 6) & 0x1f) | 0xc0)
      bytes.push((c & 0x3f) | 0x80)
    } else {
      bytes.push(c & 0xff)
    }
  }
  return bytes
}

/**
 * bytes转base64
 * @param bytes
 */
function bytesToBase64(bytes: any) {
  return base64ArrayBuffer(bytes)
}


export {
  stringToByte,
  bytesToBase64
}