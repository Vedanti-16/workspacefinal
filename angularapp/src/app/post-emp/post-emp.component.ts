import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-emp',
  templateUrl: './post-emp.component.html',
  styleUrls: ['./post-emp.component.css']
})
export class PostEmpComponent implements OnInit {
 

  constructor(private http:BackendService, private route:Router) { }

  ngOnInit() {
  }

  postform = new FormGroup({
    employeeId:new FormControl(0),
    employeeName:new FormControl(''),
    departmentID:new FormControl(0),
    designationId:new FormControl(0),
    salary:new FormControl(0),
    joindate:new FormControl('')
  })

  handlepost(){
    this.http.postData(this.postform.value).subscribe((success) =>{ 
     },
    error=>{
         console.log(error);
    });
    this.route.navigate(['']);
  }
}
