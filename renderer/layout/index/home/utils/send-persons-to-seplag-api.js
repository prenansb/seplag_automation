import { postFeedback } from './'
import api from '@/services/api'

export async function sendPersonsToSeplagAPI(personsSeparated, dispatch) {
  console.time('time')

  let index = 1
  for (const personsGroup of personsSeparated) {
    let personsRequest = []

    for (const person of personsGroup) {
      personsRequest.push(() => api.post('/salvarFaturaItem', person))
    }

    const postResults = await Promise.all(personsRequest.map(p => p()))

    try {
      postFeedback(postResults, index)
    } catch (error) {
      break
    }
    personsRequest = []
    dispatch({ type: 'increment', payload: index })

    index++
  }

  console.timeEnd('time')
}
