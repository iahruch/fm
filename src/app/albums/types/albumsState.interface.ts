import { GetAlbumsResponseInterface } from './getAlbumsResponse.interface'
import { AlbumInterface } from './album.interface'

export interface AlbumsStateInterface {
  isLoading: boolean
  albums: GetAlbumsResponseInterface | null
  error: string | null
  searchResult: AlbumInterface[]
}
