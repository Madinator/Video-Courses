import { CoursesListComponent } from './courses-list.component';
import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'app/core/components/components.module';
import { OrderByPipe } from 'app/core/pipes/order-by.pipe';
import { SharedModule } from 'app/shared/shared.module';
import { CoursesListRoutingModule } from './courses-list-routing.module';


@NgModule({
  declarations: [OrderByPipe, CoursesListComponent ],
  imports: [
    CommonModule, 
    ComponentsModule, 
    CardModule, 
    SharedModule, 
    FormsModule, 
    FormsModule,
    CoursesListRoutingModule,
  ]
})
export class CoursesListModule { }
