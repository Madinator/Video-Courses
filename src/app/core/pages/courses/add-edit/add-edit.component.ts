import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/core/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Card, CourseActionType } from 'app/core/models/courses';


@Component({
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  public title: string;
  public creationDate: Date;
  public description: string;
  public duration: number;
  private data: Card | undefined;
  private actionType: CourseActionType;
  private id: number;
  constructor(
    private courseService: CourseService,
    private route: Router,
    private router: ActivatedRoute
    ) 
  { 
  }

  ngOnInit(): void {
    this.actionType = this.router.snapshot.data['type'];
    if(this.actionType === CourseActionType.Edit) {
      this.id = parseInt(this.router.snapshot.params?.['id']);
      this.data = this.courseService.getItemById(this.id)
      if(this.data) {
        this.title = this.data.title;
        this.creationDate = this.data.creationDate;
        this.duration = this.data.duration;
        this.description = this.data.description;
      }
    }
  }

  public save(): void {
    if (this.actionType === CourseActionType.Edit) {
      this.courseService.update(this.id, { id:this.id, title: this.title, creationDate: 
        new Date(this.creationDate), duration: this.duration, description: this.description,
        topRated: false})
    this.route.navigate(['/courses'])
    }
    if (this.actionType === CourseActionType.Add) {
      this.courseService.create({ id:7, title: this.title, creationDate: 
          new Date(this.creationDate), duration: this.duration, description: this.description,
          topRated: false})
      this.route.navigate(['/courses'])
    }
  }

}
