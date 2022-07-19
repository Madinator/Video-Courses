import { Card } from 'app/core/models/courses';
import { Component, OnInit, TrackByFunction } from '@angular/core';
import { FilterPipe } from 'app/core/pipes/filter.pipe';

import { CourseService } from 'app/core/services/course.service';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],  
})
export class CoursesListComponent implements OnInit  {
  public searchText: string;
  public data: Card[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.data = this.courseService.getList();
  }

  public deleteCourse(id: number): void {
    this.courseService.remove(id);
    this.data = this.courseService.getList();
  }

  
  public trackCoursesById: TrackByFunction<Card> = (index: number, item: Card) => item.id;

  public filterByName(): void {
    this.data = (new FilterPipe).transform(this.courseService.getList(), this.searchText)
  }
}
