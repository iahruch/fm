import { Injectable } from '@angular/core'

@Injectable()
export class PersistFavoritesServices {
  get() {
    try {
      return JSON.parse(localStorage.getItem('fav'))
    } catch (e) {
      console.error('Error retrieve data from local storage', e)
    }
  }

  set(data) {
    try {
      localStorage.setItem('fav', JSON.stringify(data))
    } catch (e) {
      console.error('Error when saving to local storage', e)
    }
  }
}
