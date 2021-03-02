import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { getSearch, getSearchFailure, getSearchSuccess } from '../actions'
import {
  catchError,
  filter,
  map,
  pluck,
  switchMap,
  take,
  tap,
} from 'rxjs/operators'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { getAlbumsSelector } from '../selectors'
import { of } from 'rxjs'
import { AlbumInterface } from '../../types/album.interface'

@Injectable()
export class SearchEffect {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSearch),
      switchMap(({ searchStr }) => {
        return this.store.pipe(
          select(getAlbumsSelector),
          pluck('albums', 'album'),

          map((albums: AlbumInterface[]) => {
            let resultSearch = albums.filter(({ name }) => {
              return new RegExp(searchStr, 'ig').test(name)
            })
            return getSearchSuccess({ albums: resultSearch })
          }),
          catchError(() => {
            return of(getSearchFailure())
          })
        )
      })
    )
  )

  redirectAfterSuccessSearch$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getSearchSuccess),
        tap(() => {
          let url = this.router.url
          this.router.navigate([url, 'search'])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store
  ) {}
}
