import { CreationDateDirective } from 'app/core/directives/creation-date.directive';
import { DurationPipe } from './../../../pipes/duration.pipe';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../../../components/components.module';
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Card } from '../../../models/courses';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [ CommonModule, ComponentsModule, DurationPipe, CreationDateDirective ],
})
export class CardComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data: Card;
  @Input() last: boolean;
  @Output('delete') deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges ---> Before ngOnInit and after Input change!')
  }

  ngOnInit(): void {
    console.log('ngOnInit ---> Component is initialized!')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ---> After Value change in Object')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ---> once after first ngDoCheck; Access for ElementRef of ContentChild')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ---> once after ngAfterContentInit;  After Angular has already checked contnet')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ---> once after ngAfterContentChecked; Access for ElementRef of ViewChildren')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ---> once after ngAfterViewInit; after every ngAfterContentChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy --> when component to be destroyed')
  }

  public LoadMore(): void {
    console.log('Load More button is clicked!')
  }

  public delete(id: number): void {
    this.deleteEvent.emit(id);
  }

}
