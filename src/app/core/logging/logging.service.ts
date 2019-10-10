import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log = (message: any, ...params: any[]) => {
    console.log(message, ...params);
  }
}
