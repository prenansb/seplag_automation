export function getPersonsSeparated(newPersonsData, personsSize) {
  const personsSeparated = []
  for (let i = 0; i < newPersonsData.length; i += personsSize) {
    const persons = newPersonsData.slice(i, i + personsSize)
    personsSeparated.push(persons)
  }
  return personsSeparated
}
