import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-enquiries',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {
  enquiries: any[] = [
    { id: 1, title: 'Enquiry 1', description: 'Description 1' },
    { id: 2, title: 'Enquiry 2', description: 'Description 2' },
    // Add more sample data or replace it with actual data from your API
  ];

  constructor() { }

  ngOnInit() {
  }
}

