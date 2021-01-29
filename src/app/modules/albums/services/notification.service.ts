import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notification$ = new Subject<string>();

  constructor() {
  }

  notificate(state: boolean, title: string): void {
    if (state) {
      this.notification$.next(`${title} was added to favorites`);
    } else {
      this.notification$.next(`${title} was removed from favorites`);
    }
  }
}
