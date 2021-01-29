import { Injectable } from '@angular/core';
import {SpinnerService} from '../modules/albums/services/spinner.service';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      this.spinnerService.show();
      return next.handle(req)
        .pipe(
          delay(500),
          finalize(() => {
            this.spinnerService.hide();
          }));
    }
    return next.handle(req);
  }
}
