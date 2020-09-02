const REG_NUMBER = /^([+-])?0*(\d+)(\.(\d+))?$/;
const REG_E = /^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i;

/**
 * 科学计数法转十进制
 * 
 * @param {string} num 科学记数法字符串
 * @returns string 
 */
const e2ten = exports.e2ten = function (num: any) {
  var result = REG_E.exec(num.toString());
  if (!result) return num;
  var zs = result[2]
    , xs = result[4] || ""
    , e = result[5] ? +result[5] : 0;
  if (e > 0) {
    var _zs = xs.substr(0, e);
    _zs = _zs.length < e ? _zs + new Array(e - _zs.length + 1).join("0") : _zs;
    xs = xs.substr(e);
    zs += _zs;
  } else {
    e = -e;
    var s_start = zs.length - e;
    s_start = s_start < 0 ? 0 : s_start;
    var _xs = zs.substr(s_start, e);
    _xs = _xs.length < e ? new Array(e - _xs.length + 1).join("0") + _xs : _xs;
    zs = zs.substring(0, s_start);
    xs = _xs + xs;
  }
  zs = zs == "" ? "0" : zs;
  return (result[1] == "-" ? "-" : "") + zs + (xs ? "." + xs : "");
}

/**
 * 分析数字字符串
 * 
 * @param {string} num NumberString
 * @returns object
 */
exports.getNumbResult = function (num: number) {
  let result = REG_NUMBER.exec(num.toString());
  if (!result && REG_E.test(num.toString())) {
    result = REG_NUMBER.exec(e2ten(num.toString()))
  }
  if (result) {
    return {
      int: result[2],
      decimal: result[4],
      minus: result[1] == "-",
      num: result.slice(1, 3).join('')
    }
  }
}


/**
 * 清理多余"零"
 * 
 * @param {any} str 
 * @param {any} zero "零"字符
 * @param {any} type 清理模式 ^ - 开头, $ - 结尾, nto1 - 多个连续变一个
 * @returns 
 */
exports.clearZero = function (str: any, zero: any, type: any) {
  if (str == null) return "";
  var reg0 = ~"*.?+$^[](){}|\\/".indexOf(zero) ? "\\" + zero : zero;
  var arg_s = new RegExp("^" + reg0 + "+")
    , arg_e = new RegExp(reg0 + "+$")
    , arg_d = new RegExp(reg0 + "{2}", "g")
  str = str.toString();
  if (type == "^") {
    str = str.replace(arg_s, "");
  }
  if (!type || type == "$") {
    str = str.replace(arg_e, "");
  }
  if (!type || type == "nto1") {
    str = str.replace(arg_d, zero);
  }
  return str;
}