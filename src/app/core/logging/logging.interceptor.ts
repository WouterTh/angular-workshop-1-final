import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private logger: LoggingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.logger.log('%cHTTP REQUEST', 'font-weight: bold', '\r\nRequest: ', { ...req });
    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      tap(event => this.logger.log('%cHTTP RESPONSE', 'font-weight: bold', '\r\nResponse: ', { ...event }))
    );
  }
}
