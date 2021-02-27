import { GetGenreResponseInterface } from './getGenreResponse.interface'

export interface GenreStateInterface {
  isLoading: boolean
  genres: GetGenreResponseInterface | null
  error: string | null
}
