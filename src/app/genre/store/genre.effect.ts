import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { GenreService } from '../services/genre.service'
import {
  getGenreAction,
  getGenreFailureAction,
  getGenreSuccessAction,
} from './actions'
import { map, switchMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { GetGenreResponseInterface } from '../types/getGenreResponse.interface'

@Injectable()
export class GenreEffect {
  genre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getGenreAction),
      switchMap(() => {
        return this.genreService.getGenres().pipe(
          map((genres: GetGenreResponseInterface) => {
            return getGenreSuccessAction({ genres })
          }),
          catchError(() => {
            return of(getGenreFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private genreService: GenreService) {}
}
