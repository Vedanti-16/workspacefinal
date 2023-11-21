import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-getempbyid',
  templateUrl: './getempbyid.component.html',
  styleUrls: ['./getempbyid.component.css']
})
export class GetempbyidComponent implements OnInit {

  empdata:any[] = [];

  constructor(private http:BackendService, private route:Router, private ar:ActivatedRoute) {
    let eid = parseInt(this.ar.snapshot.paramMap.get("employeeId"));
    this.http.getById(eid).subscribe((success) => {
      this.empdata = success;
    })
    this.route.navigate(['']);
   }

  ngOnInit() {
  }



}
