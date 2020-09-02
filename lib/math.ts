/**
 * 获取指定范围随机数
 * @param M 起始数
 * @param N 截止数
 */
function getRandomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

export default {
  getRandomRange
}