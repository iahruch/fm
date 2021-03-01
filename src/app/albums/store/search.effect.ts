import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  getAlbumsSFailure,
  getAlbumsSuccess,
  getSearch,
  getSearchFailure,
  getSearchSuccess,
} from './actions'
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
import { getAlbumsSelector } from './selectors'
import { of } from 'rxjs'
import { GetAlbumsResponseInterface } from '../types/getAlbumsResponse.interface'
import { AlbumInterface } from '../types/album.interface'
import { loginActionSuccess } from '../../../../../exspa/src/app/auth/store/actions/login.action'

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
            //  console.log('resultSearch ', resultSearch)
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
