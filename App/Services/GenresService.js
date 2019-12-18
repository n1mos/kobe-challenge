import axios from 'axios'
import { Config } from 'App/Config'

const genresApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchGenres() {
  const url = `genre/movie/list?api_key=${Config.API_KEY}`

  return genresApiClient.get(url).then((response) => {
    if (response.status == 200) {
      return response.data
    }

    return null
  })
}

export const genresService = {
  fetchGenres,
}
