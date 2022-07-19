import { IfAuthenticatedDirective } from './../../core/directives/if-authenticated.directive';
import { HeaderComponent } from './header.component';
import { RouteComponent } from './route/route.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RouteComponent,
    HeaderComponent,
    IfAuthenticatedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
