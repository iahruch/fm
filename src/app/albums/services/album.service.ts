import { Injectable } from '@angular/core'
import { GetAlbumsResponseInterface } from '../types/getAlbumsResponse.interface'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums(genre): Observable<GetAlbumsResponseInterface> {
    let params = new HttpParams()
      .set('method', 'tag.gettopalbums')
      .set('tag', genre)
      .set('format', 'json')

    return this.http.get<GetAlbumsResponseInterface>(environment.baseUrl, {
      params,
    })
  }
}
