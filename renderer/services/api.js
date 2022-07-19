import axios from "axios"
let token = ""

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const auth = async () => {
  const firstToken = await axios
    .post(process.env.NEXT_PUBLIC_FIRST_TOKEN_URL, {
      aplicacao: 1247896,
      cpf: process.env.NEXT_PUBLIC_LOGIN,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    })
    .catch(err => {
      console.dir(err)
    })

  const getIds = await axios.post(process.env.NEXT_PUBLIC_GET_IDS_URL, null, {
    headers: { authorizationtoken: firstToken.data.token },
  })

  const getPKey = await axios.get(process.env.NEXT_PUBLIC_P_KEY_URL, {
    headers: {
      sistemaid: getIds.data[0].aplicacoes[0].aplicacaoId,
      vinculoid: getIds.data[0].vinculoCodigo,
      authorizationtoken: firstToken.data.token,
    },
  })

  return axios.post(process.env.NEXT_PUBLIC_GET_BEARER_TOKEN_URL, null, {
    headers: { "p-key": getPKey.data.token },
  })
}

api.interceptors.request.use(config => {
  config.headers["Authorization"] = `Bearer ${token}`
  return config
})

api.interceptors.response.use(null, async err => {
  if (err?.response) {
    if ([403, 401].includes(err.response.status)) {
      const authentication = await auth()
      token = authentication.data.token
      err.config.headers["Authorization"] = `Bearer ${token}`
      return axios(err.config)
    }
  }
  console.dir(err)
  throw err
})

export default api
