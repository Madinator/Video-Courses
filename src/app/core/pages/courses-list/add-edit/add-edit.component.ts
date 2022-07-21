import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/core/services/course.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  public title: string;
  public creationDate: Date;
  public description: string;
  public duration: number;
  constructor(private courseService: CourseService,
              private route: Router) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.courseService.create({ id:7, title: this.title, creationDate: 
      new Date(this.creationDate), duration: this.duration, description: this.description,
      topRated: false})
      this.route.navigate(['/Courses'])
  }

}
