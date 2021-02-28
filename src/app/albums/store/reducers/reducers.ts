import { AlbumsStateInterface } from '../../types/albumsState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  backToGenre,
  getAlbums,
  getAlbumsSFailure,
  getAlbumsSuccess,
  getSearch,
  getSearchFailure,
  getSearchSuccess,
} from '../actions'
import { routerNavigationAction } from '@ngrx/router-store'

const initialState: AlbumsStateInterface = {
  isLoading: false,
  error: null,
  albums: null,
  searchResult: null,
}

const reducers = createReducer(
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
  })),

  on(getSearch, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(getSearchSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    searchResult: action.albums,
  })),

  on(getSearchFailure, (state) => ({
    ...state,
  })),

  on(backToGenre, (state) => initialState)
)

export function reducer(state: AlbumsStateInterface, action: Action) {
  return reducers(state, action)
}
