import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/core/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course, CourseActionType } from 'app/core/models/courses';
import { Observable } from 'rxjs';



@Component({
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  public name: string;
  public date: Date;
  public description: string;
  public length: number;
  private data: Observable<Course>;
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
      this.courseService.getItemById(this.id)
      .subscribe(data => {
        if(this.data) {
          this.name = data.name;
          this.date = data.date;
          this.length = data.length;
          this.description = data.description;
        }
      })
    }
  }

  public save(): void {
    if (this.actionType === CourseActionType.Edit) {
      this.courseService.update(this.id, {
        id: this.id, name: this.name, date: this.date, length: this.length, description: this.description,
        isTopRated: false,
        authors: []
      })
      .subscribe((res:Response) => {
        if(res) {
          this.route.navigate(['/courses'])
        }
      })
    }
    if (this.actionType === CourseActionType.Add) {
      this.courseService.create({
        name: this.name, date: this.date, length: this.length, description: this.description,
        isTopRated: false,
        authors: []
      })
      .subscribe((res: Response) => {
        if(res) {
          this.route.navigate(['/courses'])
        }
      })
    }
  }

}
