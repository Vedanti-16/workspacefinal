import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courses: any;

  admission: 

  constructor(private s:BackendService) { }

  ngOnInit() {
    this.s.getCourses().subscribe((data) => {
      this.courses = data
    })
  }

  submitAdmission(){
    this.s.postAdmissions()
  }

}
