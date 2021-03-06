import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { addToFavoritesAction, addToFavoritesSuccessAction } from './actions'
import { getAlbumsSuccess } from '../../../../albums/store/actions'
import { PersistFavoritesServices } from '../services/persistFavorites.services'
import { MessageService } from '../../../services/alert.service'

@Injectable()
export class AddToFavoritesEffect {
  fav: string[]

  favorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ name }) => {
        let fav = this.persistFavoritesServices.get() || []

        if (fav.includes(name)) {
          fav = fav.filter((el) => el !== name)
          this.msg.setMessage({ like: false, text: name })
        } else {
          fav.push(name)
          this.msg.setMessage({ like: true, text: name })
        }

        this.persistFavoritesServices.set(fav)
        return of(addToFavoritesSuccessAction({ favorites: fav }))
      })
    )
  )

  checkBeforeLoadingAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAlbumsSuccess),
      switchMap(() => {
        let fav = this.persistFavoritesServices.get() || []
        return of(addToFavoritesSuccessAction({ favorites: fav }))
      })
    )
  )

  constructor(
    private actions$: Actions,
    private persistFavoritesServices: PersistFavoritesServices,
    private msg: MessageService
  ) {}
}
