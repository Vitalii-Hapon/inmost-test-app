import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAlbum} from '../../../../models/response-models';
import {Subject} from 'rxjs';
import {TagFilterService} from '../../../../services/tag-filter.service';
import {takeUntil} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';
import {FavoritesService} from '../../../../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  public albums: IAlbum[];
  public filter: string;
  public ngUnsubscribe: Subject<void> = new Subject();
  public pageSize = 10;
  public startIndex = 0;
  public endIndex = this.pageSize;
  public length = 0;

  constructor(private favoritesService: FavoritesService,
              private filterService: TagFilterService) {
  }

  ngOnInit(): void {
    this.filterService.filter$
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(value => this.filter = value,
        error => console.log(error));

    this.getAlbums();
  }

  getAlbums(): void {
    this.albums = this.favoritesService.getItems();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  changePage($event: PageEvent): void {
    this.startIndex = $event.pageIndex * $event.pageSize;
    this.endIndex = this.startIndex + $event.pageSize;
    if (this.endIndex > this.albums.length) {
      this.endIndex = this.albums.length;
    }
  }

}
