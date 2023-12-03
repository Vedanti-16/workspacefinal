import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-view-admissions',
  templateUrl: './view-admissions.component.html',
  styleUrls: ['./view-admissions.component.css']
})
export class ViewAdmissionsComponent implements OnInit {

  status = ["Pending", "Accepted"];
  admData: any;
  userId:number=0;
  paymentData: any;

  constructor(private http:BackendService) {
    
   }

  ngOnInit(){   
    this.http.getAdmissions().subscribe((data)=>{
      this.admData = data
    }) 
  }  

}
