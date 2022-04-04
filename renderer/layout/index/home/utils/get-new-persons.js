export function getNewPersons(seplagPersonsData, sheetPersonsData) {
  return seplagPersonsData.data.Resultado.map(seplagPerson => {
    const sheetPerson = sheetPersonsData.filter(
      sheetPerson => sheetPerson.CpfFormatado === seplagPerson.CpfFormatado
    )[0]

    return {
      ...seplagPerson,
      ...sheetPerson,
    }
  })
}
