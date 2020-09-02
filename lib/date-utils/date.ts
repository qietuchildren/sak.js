enum RangeType {
  'y',
  'M',
  'w',
  'd',
  'h',
  'm',
  's',
  'ms'
}

/**
 * 根据开始时间、结束时间 计算不同rangeType（时间区间格式，年、月、日等）的时间区间
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param rangeType 时间区间类型 年 y、月 M、日 d、周 w、时 h、分 m、秒 s、毫秒 ms
 * 
 */
function calcTimeRange(startTime: Date, endTime: Date, rangeType: RangeType) {
  let timeLen: number = 0
  const oneMin = 1000 * 60
  switch (rangeType) {
    case RangeType['y']:
      timeLen = oneMin * 60 * 24 * 365
      break;
    case RangeType['M']:
      timeLen = oneMin * 60 * 24 * 365
      break;
    case RangeType['w']:
      timeLen = oneMin * 60 * 24 * 7
      break;
    case RangeType['d']:
      timeLen = oneMin * 60 * 24
      break;
    case RangeType['h']:
      timeLen = oneMin * 60
      break;
    case RangeType['m']:
      timeLen = oneMin
      break;
    case RangeType['s']:
      timeLen = 1000
    case RangeType['ms']:
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