const columnIndex = {
  B4: { value: 'CpfFormatado', type: 'string' },
  D4: { value: 'Nome', type: 'string' },
  G4: { value: 'DiasTrabalhados', type: 'number' },
  H4: { value: 'SalarioBase', type: 'number' },
  I4: { value: 'ValorAdicional', type: 'number' },
  J4: { value: 'ValorAdicionalNoturno', type: 'number' },
  K4: { value: 'ValorReservaTecnica', type: 'number' },
  L4: { value: 'ValorEncargos', type: 'number' },
  M4: { value: 'ValorInsalubridade', type: 'number' },
  N4: { value: 'ValorPericulosidade', type: 'number' },
  O4: { value: 'ValorOutros', type: 'number' },
  Q4: { value: 'ValorValeTransporte', type: 'number' },
  R4: { value: 'ValorValeRefeicao', type: 'number' },
  S4: { value: 'ValorTaxa', type: 'number' },
  T4: { value: 'ValorCestaBasica', type: 'number' },
  U4: { value: 'ValorFarda', type: 'number' },
  V4: { value: 'ValorMunicao', type: 'number' },
  W4: { value: 'ValorSeguroVida', type: 'number' },
  X4: { value: 'ValorSupervisao', type: 'number' },
  Y4: { value: 'ValorIntrajornadaDiurno', type: 'number' },
  Z4: { value: 'ValorIntrajornadaNoturno', type: 'number' },
  AA4: { value: 'ValorTributos', type: 'number' },
  AB4: { value: 'ValorInsumosMaoObra', type: 'number' },
  AD4: { value: 'ValorEquipamento', type: 'number' },
  AE4: { value: 'ValorPlanoSaude', type: 'number' },
  AG4: { value: 'QuantidadeHoraExtra', type: 'number' },
  AH4: { value: 'ValorHoraExtra', type: 'number' },
  AI4: { value: 'ValorDSR', type: 'number' },
  AJ4: { value: 'ValorExtraEncargos', type: 'number' },
  AK4: { value: 'ValorExtraTaxa', type: 'number' },
  AL4: { value: 'ValorExtraTributos', type: 'number' },
  AN4: { value: 'QuantidadeDiarias', type: 'number' },
  AO4: { value: 'ValorPassagem', type: 'number' },
  AP4: { value: 'ValorViagem', type: 'number' },
  AQ4: { value: 'ValorViagemTaxa', type: 'number' },
  AR4: { value: 'ValorViagemTributos', type: 'number' },
}

const columns = [
  'B',
  'D',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'AA',
  'AB',
  'AD',
  'AE',
  'AG',
  'AH',
  'AI',
  'AJ',
  'AK',
  'AL',
  'AN',
  'AO',
  'AP',
  'AQ',
  'AR',
]

export function getPersons(page, lineStart, lineEnd) {
  const persons = []

  for (let line = 5; line >= lineStart && line <= lineEnd; line++) {
    const person = {}
    for (const column of columns) {
      const cell = page[`${column}${line}`]
      const value = cell.w.trim()
      const personKey = columnIndex[`${column}4`]

      if (value === '-') {
        person[personKey.value] = 0
        continue
      }

      person[personKey.value] = personKey.type === 'number' ? cell.v : value
    }
    persons.push(person)
  }

  return persons
}
