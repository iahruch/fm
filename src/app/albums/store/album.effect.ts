import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AlbumService } from '../services/album.service'
import { getAlbums, getAlbumsSFailure, getAlbumsSuccess } from './actions'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { GetAlbumsResponseInterface } from '../types/getAlbumsResponse.interface'

@Injectable()
export class AlbumEffect {
  albums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAlbums),
      switchMap(({ genre }) => {
        return this.albumService.getAlbums(genre).pipe(
          map((albums: GetAlbumsResponseInterface) => {
            console.log('AlbumEffect', albums)
            return getAlbumsSuccess({ albums })
          }),
          catchError(() => {
            return of(getAlbumsSFailure())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private albumService: AlbumService) {}
}
