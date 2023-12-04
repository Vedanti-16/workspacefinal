import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Admission } from '../Models/Admission';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courses: any;
  
  c_id: number;
  

  constructor(private s:BackendService, private ar:ActivatedRoute, private router:Router) { }

  admission: Admission = {
    admissionId: 0,
    courseId: 0,
    userId: 0,
    status: '',
    isDeleted: false,
    courseName:'',
    course:null

  }

  ngOnInit() {

    // const id = this.ar.snapshot.paramMap.get('courseID');
    // this.c_id = Number(id);

    this.s.getCourses().subscribe((data) => {
      this.courses = data
    })
  }

  submitAdmission(courseId:number){
    this.admission.courseId=courseId;
    this.admission.status="pending";
    this.admission.userId=0;
    console.log('courseId:' + courseId);

    this.s.postAdmissions(this.admission).subscribe(
      (res)=>{
        console.log(res);
        this.admission = res;
        this.router.navigate(["/admForm",this.admission.admissionId, this.admission.courseId]);

      }
    );

    console.log('AdmissionId:' + this.admission.admissionId);


    
  }

}
