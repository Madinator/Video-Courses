import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService,
              private route: Router
  ) { }

  ngOnInit(): void {
  }

  public login():void {
    this.authService.login({ id: 777,"email": this.email, "password": this.password})
    this.route.navigate(['/courses'])
  }

}
