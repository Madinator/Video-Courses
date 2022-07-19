import { Injectable } from '@angular/core';
import { UserInfo, User } from 'app/core/models/user'
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeUserInfo: UserInfo = {
    id: 777,
    firstName: 'Madi',
    lastName: 'Super',
  }

  private fakeUser: User = {
    id: 777,
    email: "Madinator@epam.com",
    password: "12345678"
  }

  constructor(private storageService: StorageService) { }

  public login(user : User): boolean {
    if(this.fakeUser.id === user.id) {
      this.storageService.setToken('pxguruq232mvkdjio343kvojxildnvdlvdv34')
      return true;
    }
    return false;
  }

  public logout(): void {
    this.storageService.removeToken();
  }

  public IsAuthenticated(): boolean {
    if(this.storageService.getToken() === "pxguruq232mvkdjio343kvojxildnvdlvdv34") {
      return true;
    }
    return false;
  }

  public GetUserInfo(): UserInfo {
    return this.fakeUserInfo;
  }
}
