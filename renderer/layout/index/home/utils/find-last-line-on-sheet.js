export function findLastLineOnSheet(sheet) {
  const findLinesQuantity = Object.keys(sheet).filter(key => key.substring(0, 1) === 'B')
  return parseInt(findLinesQuantity[findLinesQuantity.length - 1].substring(1), 10)
}
