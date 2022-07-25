import { CoursesModule } from './pages/courses/courses.module';
import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [  
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginModule,
    CoursesModule
  ]
})
export class CoreModule { }
