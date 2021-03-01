import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddToFavoritesComponent } from './components/addToFavorites.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducer } from './store/reducers'
import { AddToFavoritesEffect } from './store/addToFavorites.effect'
import { PersistFavoritesServices } from './services/persistFavorites.services'

@NgModule({
  declarations: [AddToFavoritesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('favorites', reducer),
    EffectsModule.forFeature([AddToFavoritesEffect]),
  ],
  exports: [AddToFavoritesComponent],
  providers: [PersistFavoritesServices],
})
export class AddToFavoritesModule {}
