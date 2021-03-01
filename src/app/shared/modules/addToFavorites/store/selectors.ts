import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../../types/appState.interface'
import { FavoritesStateInterface } from '../types/addToFavorites.interface'

export const favoritesFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FavoritesStateInterface
>('favorites')

export const getFavoritesSelector = createSelector(
  favoritesFeatureSelector,
  (state: FavoritesStateInterface) => state.favorites
)
