import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AlbumsComponent } from './components/albums/albums.component'
import { StoreModule } from '@ngrx/store'

import { EffectsModule } from '@ngrx/effects'
import { AlbumEffect } from './store/album.effect'
import { HttpClientModule } from '@angular/common/http'
import { AlbumService } from './services/album.service'
import { reducer } from './store/reducers/reducers'
import { SearchResultComponent } from './components/search-result/search-result.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SearchEffect } from './store/search.effect'
import { AddToFavoritesModule } from '../shared/modules/addToFavorites/addToFavorites.module'

const routes = [
  { path: ':id', component: AlbumsComponent },
  { path: ':id/search', component: SearchResultComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [TopbarComponent, AlbumsComponent, SearchResultComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AddToFavoritesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('albums', reducer),
    EffectsModule.forFeature([AlbumEffect, SearchEffect]),
  ],
  exports: [],
  providers: [AlbumService],
})
export class AlbumsModule {}
