import { GenreInterface } from './genre.interface'

export interface GetGenreResponseInterface {
  tags: {
    tag: GenreInterface[]
    '@attr': {
      page: string
      perPage: string
      totalPages: string
      total: string
    }
  }
}
