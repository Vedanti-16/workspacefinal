import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-admissions',
  templateUrl: './create-admissions.component.html',
  styleUrls: ['./create-admissions.component.css']
})
export class CreateAdmissionsComponent implements OnInit {

  modes = ["UPI","Card"];
  AdmissionForm:any;
  courseData: any;
  courseData1=["Java","Android","Dotnet"]

  constructor(private http:BackendService, private fb:FormBuilder) { 
    
  }

  createAdmissionForm(){
    this.AdmissionForm = this.fb.group({
      userId:['',Validators.required],
      courseName:["",Validators.required],
      amount:["", Validators.required],
      mode:["",Validators.required],
      paymentDate:["",Validators.required]
    })
  }

  ngOnInit() {
    this.createAdmissionForm();
  }

  onSubmit(){

    this.http.getCourses().subscribe((data) => {
      this.courseData = data
    })


    this.http.postPayments(this.AdmissionForm.value).subscribe()
  }

}
