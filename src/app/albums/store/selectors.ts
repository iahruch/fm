import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/appState.interface'
import { AlbumsStateInterface } from '../types/albumsState.interface'

export const albumsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AlbumsStateInterface
>('albums')

export const getAlbumsSelector = createSelector(
  albumsFeatureSelector,
  (state: AlbumsStateInterface) => state.albums
)

export const isLoadingSelector = createSelector(
  albumsFeatureSelector,
  (state: AlbumsStateInterface) => state.isLoading
)

export const searchResultSelector = createSelector(
  albumsFeatureSelector,
  (state: AlbumsStateInterface) => state.searchResult
)

export const errorSelector = createSelector(
  albumsFeatureSelector,
  (state: AlbumsStateInterface) => state.error
)
