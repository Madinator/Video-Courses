import { DeleteCardModule } from './delete-card/delete-card.module';
import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/core/components/components.module';
import { CreationDateDirective } from 'app/core/directives/creation-date.directive';
import { DurationPipe } from 'app/core/pipes/duration.pipe';



@NgModule({
  declarations: [
    CardComponent,
    DurationPipe,
    CreationDateDirective,
  ],
  imports: [ 
    CommonModule, 
    ComponentsModule, 
    DeleteCardModule
  ],
  exports: [
    CardComponent
  ],


})
export class CardModule { }
