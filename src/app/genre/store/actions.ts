import { createAction, props } from '@ngrx/store'
import { ActionTypes } from './actionTypes'
import { GetGenreResponseInterface } from '../types/getGenreResponse.interface'

export const getGenreAction = createAction(ActionTypes.GET_GENRE)

export const getGenreSuccessAction = createAction(
  ActionTypes.GET_GENRE_SUCCESS,
  props<{ genres: GetGenreResponseInterface }>()
)

export const getGenreFailureAction = createAction(ActionTypes.GET_GENRE_FAILURE)
