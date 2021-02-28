import { createAction, props } from '@ngrx/store'
import { ActionTypes } from './actionTypes'
import { GetAlbumsResponseInterface } from '../types/getAlbumsResponse.interface'
import { AlbumInterface } from '../types/album.interface'

export const getAlbums = createAction(
  ActionTypes.GET_ALBUMS,
  props<{ genre: String }>()
)

export const getAlbumsSuccess = createAction(
  ActionTypes.GET_ALBUMS_SUCCESS,
  props<{ albums: GetAlbumsResponseInterface }>()
)

export const getAlbumsSFailure = createAction(ActionTypes.GET_ALBUMS_FAILURE)

export const getSearch = createAction(
  ActionTypes.GET_SEARCH,
  props<{ searchStr: string }>()
)

export const getSearchSuccess = createAction(
  ActionTypes.GET_SEARCH_SUCCESS,
  props<{ albums: AlbumInterface[] }>()
)

export const getSearchFailure = createAction(ActionTypes.GET_SEARCH_FAILURE)

export const backToGenre = createAction(ActionTypes.BACK_TO_GENRE)
