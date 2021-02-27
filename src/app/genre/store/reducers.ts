import { GenreStateInterface } from '../types/genreState.interface'
import {
  getGenreAction,
  getGenreFailureAction,
  getGenreSuccessAction,
} from './actions'
import { Action, createReducer, on } from '@ngrx/store'

const initialState: GenreStateInterface = {
  isLoading: false,
  error: null,
  genres: null,
}

const genreReducer = createReducer(
  initialState,

  on(getGenreAction, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(getGenreSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    genres: action.genres,
  })),

  on(getGenreFailureAction, (state) => ({
    ...state,
  }))
)

export function reducer(state: GenreStateInterface, action: Action) {
  return genreReducer(state, action)
}
