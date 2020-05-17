import { Course } from './../course';
import { COURSES } from './../mock-course';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSES;
  selectedCourse: Course;

  constructor() { }
    ngOnInit() {
  }

  onSelect( course: Course): void {
      this.selectedCourse = course;
  }

}

