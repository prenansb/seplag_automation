import {
  findLastLineOnSheet,
  getNewPersons,
  getPersonsSeparated,
  getSeplagPersons,
  getSheetPersons,
  receiveSheet,
  sendPersonsToSeplagAPI,
} from "."

export async function sendData(file, id, dispatch) {
  const page = await receiveSheet(file)
  const sheetLineEnd = findLastLineOnSheet(page)
  const sheetPersonsData = getSheetPersons(page, sheetLineEnd)
  const seplagPersonsData = await getSeplagPersons(id, sheetLineEnd)
  const newPersonsData = getNewPersons(seplagPersonsData, sheetPersonsData)
  const personsSeparated = getPersonsSeparated(newPersonsData, 10)
  dispatch({ type: "persons_length", payload: personsSeparated.length })

  await sendPersonsToSeplagAPI(personsSeparated, dispatch)
}
