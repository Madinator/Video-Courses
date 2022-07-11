import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../models/courses';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Card;
  @Input() last: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
