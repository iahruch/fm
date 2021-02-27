import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthIntercepter } from './shared/services/auth.intercepter'
import { TopbarModule } from './shared/modules/topbar/topbar.module'
import { GenreModule } from './genre/genre.module'
import { StoreModule } from '@ngrx/store'
import { environment } from '../../../exspa/src/environments/environment'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { AlbumsModule } from './albums/albums.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopbarModule,
    GenreModule,
    AlbumsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
