import {Component, Input, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {FavoritesService} from '../../../../services/favorites.service';
import {IAlbum} from '../../../../models/response-models';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: IAlbum;

  constructor(private notificationService: NotificationService,
              private favoriteService: FavoritesService) {
  }

  ngOnInit(): void {
  }

  onToggleFavorites(title: string): void {
    this.album.isFavorite = !this.album.isFavorite;
    this.notificationService.notificate(this.album.isFavorite, title);
    if (this.album.isFavorite) {
      this.favoriteService.onChangeCount(1, this.album);
    } else {
      this.favoriteService.onChangeCount(-1, this.album);
    }
  }

  favoriteIcon(): string {
    return this.album.isFavorite ? 'favorite' : 'favorite_borders';
  }
}
