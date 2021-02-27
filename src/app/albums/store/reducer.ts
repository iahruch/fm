import { AlbumsStateInterface } from '../types/albumsState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import { getAlbums, getAlbumsSFailure, getAlbumsSuccess } from './actions'

const initialState: AlbumsStateInterface = {
  isLoading: false,
  error: null,
  albums: null,
}

const albumsReducer = createReducer(
  initialState,

  on(getAlbums, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(getAlbumsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    albums: action.albums,
  })),

  on(getAlbumsSFailure, (state) => ({
    ...state,
  }))
)

export function reducer(state: AlbumsStateInterface, action: Action) {
  return albumsReducer(state, action)
}
