import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Payment } from '../Models/Payment';
import { Admission } from '../Models/Admission';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../Models/Course';

@Component({
  selector: 'app-create-admissions',
  templateUrl: './create-admissions.component.html',
  styleUrls: ['./create-admissions.component.css']
})
export class CreateAdmissionsComponent implements OnInit {

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

  a_id:number;
  course:Course;
  c_id: number;
  c_name: string;
  userId: number=0;
  dmode:string="UPI";
  amt: number;

  modes = ["UPI","Card"];

  constructor(private http:BackendService, private fb:FormBuilder, private ar:ActivatedRoute) { 
    
  }

  createAdmissionForm(){
    this.AdmissionForm = this.fb.group({
      userId:['',Validators.required],
      courseId:["",Validators.required],
      feesAmount:['',Validators.required],
      mode:["",Validators.required],
      paymentDate:["",Validators.required]
    })
  }

  paymentForm(){
    this.paymentData.userId=this.userId;
    this.paymentData.status="Accepted";
    this.paymentData.mode=this.dmode;
    this.paymentData.admissionId = this.a_id;
    this.paymentData.courseId = this.c_id;
    this.AdmissionForm.status = "Accepted";
  }

  ngOnInit() {

    const id = this.ar.snapshot.paramMap.get("admissionId");
    this.a_id = Number(id);
    console.log(this.a_id);

    const id2 = this.ar.snapshot.paramMap.get("courseId");
    this.c_id = Number(id2);
    console.log(this.c_id);
    
    this.createAdmissionForm();

    // this.http.getCourses().subscribe((data) => {
    //   this.courseData = data
    // })

    this.http.getCourse(this.c_id).subscribe((data) => {
      // console.log(data);
      this.course = data;
      console.log(this.course);
      this.c_name=this.course.courseName;
      console.log(this.course.courseName);
      this.amt = this.course.feesAmount;
      console.log('amt ' + this.amt);
      console.log(this.c_name);
      this.paymentForm();
    })
  
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