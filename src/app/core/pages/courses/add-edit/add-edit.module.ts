import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddEditComponent } from './add-edit.component';
import { PipesModule } from 'app/core/pipes/pipes.module';


@NgModule({
  declarations: [
    AddEditComponent,
  ],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class AddEditModule { }
