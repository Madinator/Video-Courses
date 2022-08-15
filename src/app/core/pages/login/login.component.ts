import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'app/core/services/storage.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public login():void {
    this.authService.login({ login: this.email, password: this.password})
  }

}

