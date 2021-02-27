import { AlbumInterface } from './album.interface'

export interface GetAlbumsResponseInterface {
  albums: {
    album: AlbumInterface[]
    '@attr': {
      tag: string
      page: string
      perPage: string
      totalPages: string
      total: string
    }
  }
}
