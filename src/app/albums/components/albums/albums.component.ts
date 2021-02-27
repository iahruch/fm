import { Component, OnInit } from '@angular/core'
import { AlbumService } from '../../services/album.service'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { getAlbums } from '../../store/actions'
import { Observable } from 'rxjs'
import { getAlbumsSelector } from '../../store/selectors'
import { pluck } from 'rxjs/operators'
import { AlbumInterface } from '../../types/album.interface'

@Component({
  selector: 'fm-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {}
  albums$: Observable<AlbumInterface[]>

  ngOnInit(): void {
    this.initializeValues()
    let genre = this.route.snapshot.params.id
    console.log(genre)
    this.store.dispatch(getAlbums({ genre }))
  }
  initializeValues(): void {
    this.albums$ = this.store.pipe(
      select(getAlbumsSelector),
      pluck('albums', 'album')
    )
  }
}
