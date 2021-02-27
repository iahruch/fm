import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AlbumsComponent } from './components/albums/albums.component'
import { StoreModule } from '@ngrx/store'

import { EffectsModule } from '@ngrx/effects'
import { AlbumEffect } from './store/album.effect'
import { HttpClientModule } from '@angular/common/http'
import { AlbumService } from './services/album.service'
import { reducer } from './store/reducer'

const routes = [{ path: ':id', component: AlbumsComponent }]

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('albums', reducer),
    EffectsModule.forFeature([AlbumEffect]),
  ],
  exports: [],
  providers: [AlbumService],
})
export class AlbumsModule {}
