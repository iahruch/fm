import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getGenreAction } from '../store/actions'
import { Observable } from 'rxjs'
import { getGenreSelector } from '../store/selectors'
import { pluck, take } from 'rxjs/operators'
import { GenreInterface } from '../types/genre.interface'

@Component({
  selector: 'fm-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  genre$: Observable<GenreInterface[]>

  constructor(private store: Store) {}

  initializeValues(): void {
    this.genre$ = this.store.pipe(
      select(getGenreSelector),
      pluck('tags', 'tag')
    )
  }

  ngOnInit(): void {
    this.initializeValues()
    this.store.dispatch(getGenreAction())
  }
}
