import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getAlbumsSelector } from '../../../../albums/store/selectors'
import { pluck } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { AlbumInterface } from '../../../../albums/types/album.interface'
import { addToFavoritesAction } from '../store/actions'

@Component({
  selector: 'fm-add-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('id') idProps: string
  @Input('genre') genreProps: string
  isFavorites: false

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store
    //   .pipe(select(getAlbumsSelector), pluck('albums', 'album'))
    //   .subscribe((albums) => {
    //     this.albums = albums
    //   })
  }

  addFavorites() {
    this.store.dispatch(addToFavoritesAction({ id: this.idProps }))
  }
}
