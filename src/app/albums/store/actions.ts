import { createAction, props } from '@ngrx/store'
import { ActionTypes } from './actionTypes'
import { GetAlbumsResponseInterface } from '../types/getAlbumsResponse.interface'

export const getAlbums = createAction(
  ActionTypes.GET_ALBUMS,
  props<{ genre: String }>()
)

export const getAlbumsSuccess = createAction(
  ActionTypes.GET_ALBUMS_SUCCESS,
  props<{ albums: GetAlbumsResponseInterface }>()
)

export const getAlbumsSFailure = createAction(ActionTypes.GET_ALBUMS_FAILURE)
