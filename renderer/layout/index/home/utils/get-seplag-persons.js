import api from '@/services/api'

export async function getSeplagPersons(faturaId, sheetLineEnd) {
  return await api.get(
    `/carregarPlanilha?Pagina=1&RegistrosPorPagina=${sheetLineEnd}&OrdemCrescente=true&PaginaAlteracao=false&Exportar=false&LisheetDataStartodos=false&OrdemCampo=&FaturaId=${faturaId}`
  )
}
