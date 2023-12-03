import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { Enquiry } from '../Models/Enquiry';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  enquiryForm: FormGroup;

  enquiryTypes: string[] = ['General', 'Admission', 'Technical Support'];
  courseData: any;
  EnquiryData: any;
  userid:number=0;
  enquiryData:Enquiry = {
    createdBy: '',
    userId: 0,
    createdAt: undefined,
    enquiryType: '',
    modifiedBy: null,
    description: '',
    modifiedAt: undefined,
    title: '',
    isDeleted: undefined,
    enquiryDate: undefined,
    enquiryID: 0,
    course: undefined,
    courseName: ''
  }

  constructor(private fb: FormBuilder, private service:BackendService) { }

  createEnquiryForm() {
    this.enquiryForm = this.fb.group({
      enquiryDate: ["",Validators.required],
      courseName : ["",Validators.required],
      description : ["", Validators.required],
      enquiryType : ["", Validators.required]
    });
  }

  ngOnInit() {
    this.createEnquiryForm();

    this.service.getCourses().subscribe((data) => {
      this.courseData = data
    })

    this.service.getEnquiries().subscribe((data) => {
      this.EnquiryData = data
    })
  }

  onSubmit() {
    this.service.createEnquiry(this.enquiryForm.value).subscribe(()=>{
      alert("Enquiry added successfully")
    });
    console.log(this.enquiryForm.value);
  }
}