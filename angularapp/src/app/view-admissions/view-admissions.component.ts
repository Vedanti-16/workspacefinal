import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-view-admissions',
  templateUrl: './view-admissions.component.html',
  styleUrls: ['./view-admissions.component.css']
})
export class ViewAdmissionsComponent implements OnInit {

  constructor(private http:BackendService) { }

  ngOnInit() {
    
  }  

}
