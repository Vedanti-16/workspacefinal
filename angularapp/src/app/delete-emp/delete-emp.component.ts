import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {
  route: any;

  constructor(private http:BackendService, route:Router) { }

  ngOnInit() {
  }

  // deleteform = new FormGroup({
  //   employeeId:new FormControl(0)
  // })

  handledelete(id:number){
    this.http.deleteData(id).subscribe()
    this.route.navigate(['']);
  }
  
}
