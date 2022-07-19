import { Card } from 'app/core/models/courses';
import { Component, OnInit, TrackByFunction } from '@angular/core';
import { FilterPipe } from 'app/core/pipes/filter.pipe';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],  
})
export class CoursesListComponent implements OnInit  {
  public searchText: string;
  public data: Card[];
  private today = new Date()
  private day: number = 86400000;

  constructor() {}

  ngOnInit(): void {
    this.data = this.getData();
  }

  private getData(): Card[] {
    return [
      {
      id: 1,
      title: 'Componenets',
      creationDate: this.today,
      duration: 80,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      topRated: false,
      },
      {
        id: 2,
        title: 'Angular cores',
        creationDate: new Date(this.today.getTime()- this.day * 20),
        duration: 44,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRated: true,
      },
      {
        id: 3,
        title: 'Directives and Pipes',
        creationDate: new Date(this.today.getTime()- this.day * 4),
        duration: 214,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRated: false,
      },
    ]
  }

  public deleteCard(id: number): void {
    console.log('delete executed from child id is : ', id )
  }

  
  public trackCoursesById: TrackByFunction<Card> = (index: number, item: Card) => item.id;

  public filterByName(): void {
    this.data = (new FilterPipe).transform(this.getData(), this.searchText)
  }
}
