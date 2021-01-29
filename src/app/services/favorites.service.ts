import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAlbum} from '../models/response-models';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favoritesCount$ = new BehaviorSubject<number>(0);
  private count = 0;
  private favorites: IAlbum[] = [];

  constructor() {
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      this.count = this.favorites.length;
    }
    this.favoritesCount$.next(this.count);
  }

  onChangeCount(count: number, album: IAlbum): void {
    this.count += count;
    this.favoritesCount$.next(this.count);
    if (count > 0) {
      this.favorites.push(album);
    } else {
      this.favorites = this.favorites.filter( el => el.name !== album.name);
    }
    localStorage.removeItem('favorites');
    console.log('remove');
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getItems(): IAlbum[] {
    return this.favorites;
  }
}
