import { getPersons } from '.'

export function getSheetPersons(page, sheetLineEnd) {
  const sheetLineStart = 5
  return getPersons(page, sheetLineStart, sheetLineEnd)
}
