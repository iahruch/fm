import { Action, createReducer, on } from '@ngrx/store'
import { addToFavoritesSuccessAction } from './actions'
import { FavoritesStateInterface } from '../types/addToFavorites.interface'

const initialState: FavoritesStateInterface = {
  favorites: [],
}

const addTofavoritesReducer = createReducer(
  initialState,

  on(addToFavoritesSuccessAction, (state, action) => ({
    ...state,
    favorites: action.favorites,
  }))
)

export function reducer(state: FavoritesStateInterface, action: Action) {
  return addTofavoritesReducer(state, action)
}
