import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Payment } from '../Models/Payment';
import { Admission } from '../Models/Admission';
import { ActivatedRoute } from '@angular/router';

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

  p_id:number;
  course:any;

  constructor(private http:BackendService, private fb:FormBuilder, private ar:ActivatedRoute) { 
    
  }

  createAdmissionForm(){
    this.AdmissionForm = this.fb.group({
      userId:['',Validators.required],
      courseId:["",Validators.required],
      amount:["", Validators.required],
      mode:["",Validators.required],
      paymentDate:["",Validators.required]
    })
  }

  ngOnInit() {

    const id = this.ar.snapshot.paramMap.get("admissionId")
    this.p_id = Number(id);
    console.log(this.p_id);
    
    this.createAdmissionForm();
    this.http.getCourses().subscribe((data) => {
      this.courseData = data
    })

    this.http.getCourse(this.admission.courseId).subscribe((data) => {
      this.course = data
    })


    
    this.paymentData.userId=this.AdmissionForm.userId;
    this.paymentData.status="Accepted";
    this.paymentData.mode=this.AdmissionForm.mode;
    this.paymentData.admissionId = this.p_id;
    this.paymentData.courseId = this.AdmissionForm.courseID;

    // if(this.admission.userId == this.paymentData.userId){
    //   this.paymentData.admissionId = this.admission.admissionId;
    // }
    
  }

  onSubmit(){
    this.http.postPayments(this.paymentData).subscribe(()=>{

    });
    console.log(this.courseData);
  }

}
