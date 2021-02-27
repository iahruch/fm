import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GetGenreResponseInterface } from '../types/getGenreResponse.interface'
import { environment } from '../../../environments/environment'

@Injectable()
export class GenreService {
  constructor(private http: HttpClient) {}

  getGenres(): Observable<GetGenreResponseInterface> {
    let params = new HttpParams()
      .set('method', 'chart.gettoptags')
      .set('format', 'json')

    return this.http.get<GetGenreResponseInterface>(environment.baseUrl, {
      params,
    })
  }
}
