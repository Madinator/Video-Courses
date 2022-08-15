import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public login: string;
  constructor(private route: Router,
              private authService: AuthService) 
  { }

  ngOnInit(): void {
    this.authService.GetUserInfo()
    .subscribe(data => {
      this.login = data.login;
    } )
  }

  public logout(): void {
    this.authService.logout()
    this.route.navigate([''])
  }
}
