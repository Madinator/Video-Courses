import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { CardComponent } from './pages/courses-list/card/card.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    CoursesListComponent,
    BaseButtonComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
