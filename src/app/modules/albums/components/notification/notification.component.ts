import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {NotificationService} from '../../services/notification.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private delay = 2500;
  private ngUnsubscribe = new Subject();
  public notification: string;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.notificationService.notification$
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(notification => {
        this.notification = notification;

        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          this.notification = '';
        }, this.delay);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

}
