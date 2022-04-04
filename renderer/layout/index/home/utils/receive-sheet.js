import * as XLSX from 'xlsx'

export async function receiveSheet(file) {
  const fileBuffered = await file.arrayBuffer()
  const sheet = XLSX.read(fileBuffered)

  return sheet.Sheets.SISTER
}
