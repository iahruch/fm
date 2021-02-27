import { GetAlbumsResponseInterface } from './getAlbumsResponse.interface'

export interface AlbumsStateInterface {
  isLoading: boolean
  albums: GetAlbumsResponseInterface | null
  error: string | null
}
