import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe((error) => {
      if (error instanceof HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
          console.log("ErrorEvent")
        }
        else {
          switch(error.status) {
            case 401:
              this.router.navigate(['/login'])
              break;
            case 403:
              this.router.navigate(['/noAccess']);
              break;
          }
        }
      }
      return throwError(error);
    });
  }
}
