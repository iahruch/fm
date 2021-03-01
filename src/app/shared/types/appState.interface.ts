import { GenreStateInterface } from '../../genre/types/genreState.interface'
import { AlbumsStateInterface } from '../../albums/types/albumsState.interface'
import { FavoritesStateInterface } from '../modules/addToFavorites/types/addToFavorites.interface'

export interface AppStateInterface {
  genres: GenreStateInterface
  albums: AlbumsStateInterface
  favorites: FavoritesStateInterface
}
