import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ITag, ITagResponse} from '../models/response-models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  readonly METOD = '?method=tag.getTopTags';
  readonly API_KEY = `&api_key=${environment.ATOKEN}&format=json`;

  constructor(private http: HttpClient) {
  }

  getTags(): Observable<ITag[]> {
    return this.http
      .get<ITagResponse>(`${environment.URL}${this.METOD}${this.API_KEY}`)
      .pipe(
        map(response => response.toptags.tag)
      );
  }
}
