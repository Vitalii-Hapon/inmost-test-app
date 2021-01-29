import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAlbum, IAlbumResponse} from '../../../models/response-models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  readonly METOD = '?method=tag.gettopalbums&tag=';
  readonly API_KEY = `&api_key=${environment.ATOKEN}&format=json`;

  constructor(private http: HttpClient) {
  }

  getAlbums(tag): Observable<IAlbum[]> {
    return this.http
      .get<IAlbumResponse>(`${environment.URL}${this.METOD}${tag}${this.API_KEY}`)
      .pipe(
        map(response => response.albums.album.map(el => ({
          ...el,
          isFavorite: false,
        })))
      )
      ;
  }
}

