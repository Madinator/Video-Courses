import { Course } from 'app/core/models/courses';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCardComponent implements OnInit {
  @Input() data: Course;
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
    this.close()
  }

}
