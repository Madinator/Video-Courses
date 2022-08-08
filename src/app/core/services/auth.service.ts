import { Login, Token } from 'app/core/models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { UserInfo } from 'app/core/models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private authUrl: string = this.baseUrl + 'auth/'
  
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router,
  ) 
  { }

  public login(login: Login): void {
    this.http.post<Token>(`${this.authUrl}login`, ({ login: login.login, password: login.password}))
    .subscribe(data => {
      this.storageService.setToken(data.token)
      this.router.navigate(['/courses'])
    });
  }

  public logout(): void {
    this.storageService.removeToken();
  }

  public IsAuthenticated(): boolean {
    if(this.storageService.getToken()) {
      return true;
    }
    return false;
  }

  public GetUserInfo(): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.authUrl}userinfo`, ({
      token: this.storageService.getToken()
    }))
  }
}


