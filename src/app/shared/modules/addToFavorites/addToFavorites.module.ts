import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddToFavoritesComponent } from './components/addToFavorites.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducer } from './store/reducers'
import { AddToFavoritesEffect } from './store/addToFavorites.effect'
import { PersistFavoritesServices } from './services/persistFavorites.services'
import { MessageService } from '../../services/alert.service'

@NgModule({
  declarations: [AddToFavoritesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('favorites', reducer),
    EffectsModule.forFeature([AddToFavoritesEffect]),
  ],
  exports: [AddToFavoritesComponent],
  providers: [PersistFavoritesServices, MessageService],
})
export class AddToFavoritesModule {}
