import { GenreStateInterface } from '../../genre/types/genreState.interface'
import { AlbumsStateInterface } from '../../albums/types/albumsState.interface'

export interface AppStateInterface {
  genres: GenreStateInterface
  albums: AlbumsStateInterface
}
