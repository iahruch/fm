import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { addToFavoritesAction } from '../store/actions'
import { FavoritesStateInterface } from '../types/addToFavorites.interface'
import { getFavoritesSelector } from '../store/selectors'

@Component({
  selector: 'fm-add-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('name') nameProps: string

  isFavorites: boolean = false
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(getFavoritesSelector)).subscribe((nameAlbums) => {
      this.isFavorites = nameAlbums.includes(this.nameProps)
    })
  }

  addFavorites() {
    this.store.dispatch(addToFavoritesAction({ name: this.nameProps }))
  }
}
