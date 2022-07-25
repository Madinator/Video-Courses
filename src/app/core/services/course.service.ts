import { Injectable } from '@angular/core';
import { Card } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private today = new Date()
  private day: number = 86400000;
  private data: Card[] = [
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
  ];

  constructor() { }

  public getList(): Card[] {
    return this.data;
  }

  public create(course: Card): void {
    this.data.push(course);
  }

  public getItemById(id: number): Card | undefined {
    return this.data.find(item => item.id === id);
  }

  public update(id: number, course: Card): void {
    this.data.map(item => item.id === id ? course : item);
  } 

  public remove(id: number): void {
    this.data = this.data.filter(item => item.id !== id);
  }

}
