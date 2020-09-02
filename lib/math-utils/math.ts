const utils = require('./utils')


/**
 * 获取指定范围随机数
 * @param M 起始数
 * @param N 截止数
 */
function getRandomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}


/**
 * 阿拉伯数字转中文数字
 * 
 * @param {String} num 阿拉伯数字/字符串 , 科学记数法字符串
 * @param {Object} opration 转换配置
 *                          {
 *                              ww: {万万化单位 | false}
 *                              tenMin: {十的口语化 | false}
 *                          }
 * @returns String
 */
function numberToChinese(num: number, options?: any) {

}

console.log(numberToChinese(1234567))

export default {
  getRandomRange
}