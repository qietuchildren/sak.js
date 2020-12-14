import CookieUtils from '../lib/cookie-utils/cookie'
import MathUtils from '../lib/math-utils/math'
import DateUtils from '../lib/date-utils/date'
import UrlUtils from '../lib/url-utils/url'
import { ls, ss } from '../lib/storage-utils/index'
import { stringToByte, bytesToBase64 } from '../lib/buffer-utils/index'

export default {
  CookieUtils,
  MathUtils,
  DateUtils,
  UrlUtils,
  ls, // localStorage
  ss, // sessionStorage
  stringToByte,
  bytesToBase64
}