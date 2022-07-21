import { DurationPipe } from './../../../pipes/duration.pipe';
import { DeleteCardModule } from './delete-card/delete-card.module';
import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/core/components/components.module';
import { CreationDateDirective } from 'app/core/directives/creation-date.directive';
import { PipesModule } from 'app/core/pipes/pipes.module';



@NgModule({
  declarations: [
    CardComponent,
    CreationDateDirective,
  ],
  imports: [ 
    CommonModule, 
    ComponentsModule, 
    DeleteCardModule,
    PipesModule
  ],
  exports: [
    CardComponent
  ],


})
export class CardModule { }
