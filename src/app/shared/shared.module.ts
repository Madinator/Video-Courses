import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderModule,
    FooterComponent
  ]
})
export class SharedModule { }
