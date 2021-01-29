import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumFilterService {
  public filter$ = new Subject<string>();

  constructor() {
  }
}
