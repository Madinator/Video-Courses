import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course, CourseResponse, CourseRequest } from '../models/courses';
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environment';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    ) 
  { }

  public getList(start: number, count: number, textFragment: string): Observable<Course[]>{
    return this.http.get<CourseResponse[]>(`${this.baseUrl}courses`, 
    { params: { start: start, count: count, textFragment: textFragment} })
    .pipe(map(response => response.map(item => ({
      id: item.id,
      name: item.name,
      date: new Date(item.date),
      length: item.length,
      description: item.description,
      authors: item.authors,
      isTopRated: item.isTopRated, 
    }))));
  }

  public getItemById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}courses`, { params: { id: id} })
  }

  public create(course: CourseRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}courses`, ({
      name: course.name,
      date: formatDate(course.date, 'yyyy-MM-dd', 'en_US'),
      length: course.length,
      description: course.description,
      authors: course.authors,
      isTopRated: course.isTopRated, 
    }))
  }

  public update(id: number, course: Course): Observable<any> {
    return this.http.put(`${this.baseUrl}courses/${id}`, ({
      name: course.name,
      date: formatDate(course.date, 'yyyy-MM-dd', 'en_US'),
      length: course.length,
      description: course.description,
      authors: course.authors,
      isTopRated: course.isTopRated, 
    }))
  } 

  public remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}courses/${id}`)
  }

}
