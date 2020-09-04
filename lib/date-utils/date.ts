/**
 * 根据开始时间、结束时间 计算不同rangeType（时间区间格式，年、月、日等）的时间区间
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param rangeType 时间区间类型 年 y、月 M、日 d、周 w、时 h、分 m、秒 s、毫秒 ms
 * 
 */
function calcTimeRange(startTime: Date, endTime: Date, rangeType: string) {
  let timeLen: number = 1
  const oneMin = 1000 * 60
  switch (rangeType) {
    case 'y':
      timeLen = oneMin * 60 * 24 * 365
      break;
    case 'M':
      timeLen = oneMin * 60 * 24 * 365
      break;
    case 'w':
      timeLen = oneMin * 60 * 24 * 7
      break;
    case 'd':
      timeLen = oneMin * 60 * 24
      break;
    case 'h':
      timeLen = oneMin * 60
      break;
    case 'm':
      timeLen = oneMin
      break;
    case 's':
      timeLen = 1000
    case 'ms':
      timeLen = 1
      break;
    default:
      timeLen = 1
      break;
  }

  const startTimeUnix: any = new Date(startTime)
  const endTimeUnix: any = new Date(endTime)
  const range: number = (endTimeUnix - startTimeUnix) / timeLen
  return range
}

export default {
  calcTimeRange
}