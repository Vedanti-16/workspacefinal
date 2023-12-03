import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Payment } from '../Models/Payment';
import { Admission } from '../Models/Admission';

@Component({
  selector: 'app-create-admissions',
  templateUrl: './create-admissions.component.html',
  styleUrls: ['./create-admissions.component.css']
})
export class CreateAdmissionsComponent implements OnInit {

  modes = ["UPI","Card"];
  AdmissionForm:any;
  courseData: any[]=[];

  paymentData:Payment = {
    paymentId: 0,
    status: '',
    amount: 0,
    paymentDate: undefined,
    mode: '',
    userId: 0,
    admissionId: 0,
    courseId: 0,
    course: undefined,
    admission: undefined
  };

  admission:Admission={
    admissionId: 0,
    courseId: 0,
    userId: 0,
    status: '',
    isDeleted: false,
    course: undefined,
    courseName: ''
  }

  userId:number=0;

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
    this.http.getCourses().subscribe((data) => {
      this.courseData = data
    })
    this.paymentData.userId=this.AdmissionForm.userId;
    this.paymentData.status="Accepted";
    this.paymentData.mode=this.AdmissionForm.mode;
    if(this.admission.userId == this.paymentData.userId){
      this.paymentData.admissionId = this.admission.admissionId;
    }

    // this.http.postPayments().subscribe();
  }

  onSubmit(){
    console.log(this.courseData);
  }

}
