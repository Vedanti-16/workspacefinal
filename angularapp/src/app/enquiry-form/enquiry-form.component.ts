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

  enquiryTypes: string[] = ['General', 'Admission', 'Technical Support']; // Add more if needed
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
  // courseNames: string[] = ['Course A', 'Course B', 'Course C']; // Add actual course names

  constructor(private fb: FormBuilder, private service:BackendService) { }

  ngOnInit() {
    this.createEnquiryForm();

    this.service.getCourses().subscribe((data) => {
      this.courseData = data
    })

    this.service.getEnquiries().subscribe((data) => {
      this.EnquiryData = data
    })

    this.service.createEnquiry(this.enquiryForm.value).subscribe();
  }

  createEnquiryForm() {
    this.enquiryForm = this.fb.group({
      enquiryDate: ["",Validators.required],
      courseName : ["",Validators.required],
      description:["",Validators.required],
      enquiryType:["", Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission here, you can access form values using this.enquiryForm.value
    console.log(this.enquiryForm.value);
  }
}