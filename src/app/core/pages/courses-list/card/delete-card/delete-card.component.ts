import { Card } from 'app/core/models/courses';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.scss']
})
export class DeleteCardComponent implements OnInit {
  @Input() data: Card;
  @Output('close') closeEvent = new EventEmitter();
  @Output('delete') deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    this.closeEvent.emit();
  }

  public delete(id: number): void {
    this.deleteEvent.emit(id)
  }

}
