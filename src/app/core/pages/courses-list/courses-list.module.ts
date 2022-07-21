import { PipesModule } from './../../pipes/pipes.module';
import { CoursesListComponent } from './courses-list.component';
import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'app/core/components/components.module';
import { SharedModule } from 'app/shared/shared.module';
import { CoursesListRoutingModule } from './courses-list-routing.module';


@NgModule({
  declarations: [ CoursesListComponent ],
  imports: [
    CommonModule, 
    ComponentsModule, 
    CardModule, 
    SharedModule, 
    FormsModule, 
    CoursesListRoutingModule,
    PipesModule
  ]
})
export class CoursesListModule { }
