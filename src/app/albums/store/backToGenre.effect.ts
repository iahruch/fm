import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { backToGenre } from './actions'
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class BackToGenreEffect {
  backToGenreEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(backToGenre),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    { dispatch: false }
  )

  constructor(private actions$: Actions, private router: Router) {}
}
