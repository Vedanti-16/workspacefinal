import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private http:BackendService) { }

  ngOnInit() {
  }

  editform = new FormGroup({
    employeeId:new FormControl(''),
    employeeName:new FormControl(''),
    departmentID:new FormControl(''),
    designationId:new FormControl(''),
    salary:new FormControl(''),
    joindate:new FormControl('')
  })

  handleedit(){
    console.log(this.editform.value);
    this.http.updateData(this.editform.controls['employeeId'].value,this.editform.value).
    subscribe(success => {
       console.log(success);
    },
      error=>{
         console.log(error);
      })
  }

}
