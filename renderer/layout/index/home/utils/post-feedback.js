export function postFeedback(postResults, index) {
  const feedback = postResults.every(p => p.status === 200)

  if (!feedback) {
    console.log(`A chamada falhou no item: #${index}`, postResults)
    console.log(`Parando as chamadas subsequentes!`)
    throw new Error()
  }

  console.log(`O #${index} lote foi enviado com sucesso!`, postResults)
}
