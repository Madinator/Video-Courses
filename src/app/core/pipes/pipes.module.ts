import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { DurationPipe } from './duration.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DurationPipe,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    FilterPipe,
    OrderByPipe
  ]
})
export class PipesModule { }
