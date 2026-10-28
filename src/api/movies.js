import { movies } from '../data/movies'
import client from './client'

const USE_REMOTE_API = Boolean(import.meta.env.VITE_API_URL)

export async function getMovies() {
  if (USE_REMOTE_API) {
    const { data } = await client.get('/movies')
    return data
  }

  return movies
}

export async function getMovieById(id) {
  if (USE_REMOTE_API) {
    const { data } = await client.get(`/movies/${id}`)
    return data
  }

  return movies.find((movie) => movie.id === id) ?? null
}

export async function getFeaturedMovie() {
  const catalog = await getMovies()
  return catalog.find((movie) => movie.featured) ?? catalog[0] ?? null
}
