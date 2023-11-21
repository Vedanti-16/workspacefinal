import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {
  route: any;
  emp_id: number;

  constructor(private http:BackendService, route:Router, private aroute:ActivatedRoute) {
      let eid = parseInt(this.aroute.snapshot.paramMap.get('employeeId'));
      this.emp_id = eid;
      console.log(eid);
      this.http.deleteData(eid).subscribe(success => {
          console.log(success);
      },
      err => {
        console.log(err);
      })
      this.route.navigate(['/', ' ']);
   }

  ngOnInit() {

  }

  // deleteform = new FormGroup({
  //   employeeId:new FormControl(0)
  // })

  
    

}
