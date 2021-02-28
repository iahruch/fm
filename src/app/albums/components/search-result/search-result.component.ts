import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AlbumInterface } from '../../types/album.interface'
import { searchResultSelector } from '../../store/selectors'

@Component({
  selector: 'fm-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  searchResult$: Observable<AlbumInterface[]>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchResult$ = this.store.pipe(select(searchResultSelector))
  }
}
