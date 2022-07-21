import { BaseButtonComponent } from './base-button/base-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    BaseButtonComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseButtonComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
