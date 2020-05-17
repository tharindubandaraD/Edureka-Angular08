import { CourseService } from './../course.service';
import { Course } from './../course';
import { COURSES } from './../mock-course';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  selectedCourse: Course;
  courses = Course[];


  constructor(private CourseService: CourseService) { }
    ngOnInit() {
  }

  onSelect( course: Course): void {
      this.selectedCourse = course;
  }
  getCourses(): void{
    this.CourseService.getcourses().subscribe(courses => this.courses);
    
  }

}

