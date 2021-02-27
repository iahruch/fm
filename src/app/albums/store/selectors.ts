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
