import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/courses';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public data: Card = {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '08/28/2020',
    duration: '1h 28 min',
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
