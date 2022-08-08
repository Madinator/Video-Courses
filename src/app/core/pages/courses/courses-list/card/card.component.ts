import { Output, EventEmitter, Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'app/core/models/courses';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardComponent {
  @Input() data: Course;
  @Input() last: boolean;
  @Output('delete') deleteEvent = new EventEmitter<number>();
  @Output('loadMore') loadMoreEvent = new EventEmitter();

  public isDeleteModalVisible: boolean = false;

  constructor() { }

  public LoadMore(): void {
    this.loadMoreEvent.emit()
  }

  public showDeleteModal(): void {
    this.isDeleteModalVisible = true;
  }
  public hideDeleteModal(): void {
    this.isDeleteModalVisible = false;
  }

  public delete(id: number) {
    this.deleteEvent.emit(id)
  }

}
