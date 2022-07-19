import { LoginModule } from './pages/login/login.module';
import { CoursesListModule } from './pages/courses-list/courses-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [  
  
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CoursesListModule,
    LoginModule
  ]
})
export class CoreModule { }
