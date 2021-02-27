import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/appState.interface'
import { GenreStateInterface } from '../types/genreState.interface'

export const genreFeatureSelector = createFeatureSelector<
  AppStateInterface,
  GenreStateInterface
>('genres')

export const getGenreSelector = createSelector(
  genreFeatureSelector,
  (state: GenreStateInterface) => state.genres
)
