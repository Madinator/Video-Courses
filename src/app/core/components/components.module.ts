import { BaseButtonComponent } from './base-button/base-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';



@NgModule({
  declarations: [
    BaseButtonComponent,
    ModalComponent,
    SpinnerOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseButtonComponent,
    ModalComponent,
    SpinnerOverlayComponent
  ]
})
export class ComponentsModule { }
