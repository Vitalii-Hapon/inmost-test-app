import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  isFavorite = false;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  onToggleFavorites(): void {
    this.isFavorite = !this.isFavorite;
    this.notificationService.notificate(this.isFavorite, 'title');
  }

  favoriteIcon(): string {
    return this.isFavorite ? 'favorite' : 'favorite_borders';
  }
}
