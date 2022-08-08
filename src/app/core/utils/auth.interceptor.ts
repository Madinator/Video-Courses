import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'app/core/services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  urlsToNotUse: Array<string>;
  private baseUrl: string = environment.baseUrl;

  constructor(
    private storageService: StorageService
  ) {
    this.urlsToNotUse = [
      'auth/login'
    ]
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.isValidURL(request.url)) {

      const token = this.storageService.getToken()
      const headers: HttpHeaders = new HttpHeaders().set('token', token!);
      const authReq = request.clone({ headers })
      
      return next.handle(authReq);
    }
    return next.handle(request);
  }

  private isValidURL(url: string): boolean {
    for(let item of this.urlsToNotUse) {
      if(this.baseUrl + item === url) {
        return false;
      }
    }
    return true;
  }
}
