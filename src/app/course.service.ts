import { COURSES } from './mock-course';
import { Course } from './course';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
getcourses(): Observable<Course[]> {
  return of (COURSES);
}

constructor() { }

}
