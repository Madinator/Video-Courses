import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
})
export class CoursesModule { }
