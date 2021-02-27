import { NgModule } from '@angular/core'
import { GenreComponent } from './components/genre.component'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { GenreService } from './services/genre.service'
import { EffectsModule } from '@ngrx/effects'
import { GenreEffect } from './store/genre.effect'
import { reducer } from './store/reducers'

const routes: Routes = [{ path: '', component: GenreComponent }]

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('genres', reducer),
    EffectsModule.forFeature([GenreEffect]),
  ],
  exports: [],
  providers: [GenreService],
})
export class GenreModule {}
