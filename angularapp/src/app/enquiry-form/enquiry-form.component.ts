import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  enquiryForm: FormGroup;

  enquiryTypes: string[] = ['General', 'Admission', 'Technical Support']; // Add more if needed
  courseNames: string[] = ['Course A', 'Course B', 'Course C']; // Add actual course names

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createEnquiryForm();
  }

  createEnquiryForm() {
    this.enquiryForm = this.fb.group({
      enquiryDate: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      enquiryType: ['', Validators.required],
      courseName: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission here, you can access form values using this.enquiryForm.value
    console.log(this.enquiryForm.value);
  }
}