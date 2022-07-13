import { SharedModule } from './../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../../components/components.module';
import { CardComponent } from './card/card.component';
import { Card } from './../../models/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  standalone: true,
  imports: [ CommonModule, ComponentsModule, CardComponent, SharedModule ]
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
