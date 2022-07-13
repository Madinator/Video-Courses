import { CardComponent } from './pages/courses-list/card/card.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginComponent,
    CoursesListComponent,
  ],
  exports: [
    CoursesListComponent,
    LoginComponent
  ]
})
export class CoreModule { }
