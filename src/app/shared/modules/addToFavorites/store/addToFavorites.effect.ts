import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { addToFavoritesAction } from './actions'

@Injectable()
export class AddToFavoritesEffect {
  favorites$ = createEffect(() =>
    this.actions$
      .pipe
      // ofType(addToFavoritesAction),
      // switchMap(({ id }) => {
      //   const fav = localStorage.getItem('fav')
      //   if (fav.includes(id)) {
      //     fav = fav.filtee
      //   }
      // })
      ()
  )

  constructor(private actions$: Actions) {}
}
