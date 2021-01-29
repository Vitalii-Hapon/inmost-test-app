import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subject} from 'rxjs';
import {AlbumsService} from '../../services/albums.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {TagFilterService} from '../../../../services/tag-filter.service';
import {PageEvent} from '@angular/material/paginator';
import {IAlbum} from '../../../../models/response-models';
import {FavoritesService} from '../../../../services/favorites.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit, OnDestroy {
  public albums: IAlbum[];
  public filter: string;
  public ngUnsubscribe: Subject<void> = new Subject();
  public pageSize = 10;
  public startIndex = 0;
  public endIndex = this.pageSize;
  public length = 0;
  public tag: string;
  public favorites: IAlbum[];

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService,
              private favoriteService: FavoritesService,
              private filterService: TagFilterService) {
  }

  ngOnInit(): void {
    this.filterService.filter$
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(value => this.filter = value,
        error => console.log(error));

    this.favorites = this.favoriteService.getItems();
    console.log(this.favorites);
    this.getAlbums();
  }

  getAlbums(): void {
    this.route.params
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap((param: Params) => {
            this.tag = param.name;
            return this.albumService.getAlbums(param.name);
          }
        ))
      .subscribe(albums => {
        this.albums = albums.map( el => {
          if (this.favorites.find(fel => fel.name === el.name)) {
            return {...el, isFavorite : true};
          }
          return el;
        });
        this.length = this.albums.length;
      }, error => console.log(error));
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
