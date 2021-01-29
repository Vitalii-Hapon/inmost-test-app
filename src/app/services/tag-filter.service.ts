import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagFilterService {
  public filter$ = new Subject<string>();

  constructor() {
  }
}
