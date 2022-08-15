import { Course } from 'app/core/models/courses';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TrackByFunction, ViewChild, ElementRef } from '@angular/core';
import { CourseService } from 'app/core/services/course.service';
import { map, filter, debounceTime, pairwise, fromEvent, distinctUntilChanged } from 'rxjs';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
})
export class CoursesListComponent implements OnInit  {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  public searchText: string = '';
  public data: Course[];
  private start: number = 0;
  private count: number = 5;


  constructor(
    private courseService: CourseService,
    private ref: ChangeDetectorRef) {}

  ngOnInit(): void {    
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(250)
      , map((event: any) => {
        return event.target.value
      })
      , distinctUntilChanged()
      , pairwise()
      , filter(([previus, current]) => {
        if(!current || previus > current || current.length >= 3) {
          return true;
        }
        return false;
      })
    )
    .subscribe(() => {
      this.getList()
    })

    this.getList()
  }

  public getList(): void {
    this.courseService.getList(this.start, this.count, this.searchText)
    .subscribe((data) => {
      this.data = data
      this.ref.markForCheck()
    });
  }

  public deleteCourse(id: number): void {
    this.courseService.remove(id)
    .subscribe((res:Response) => {
      this.getList()
    })
  }

  
  public trackCoursesById: TrackByFunction<Course> = (index: number, item: Course) => item.id;

  public loadMore(): void {
    this.count +=5;
    this.getList()
  }
}
