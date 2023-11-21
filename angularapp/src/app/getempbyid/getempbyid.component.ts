import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getempbyid',
  templateUrl: './getempbyid.component.html',
  styleUrls: ['./getempbyid.component.css']
})
export class GetempbyidComponent implements OnInit {

  constructor(private http:BackendService, private route:Router) {
    this.http.getById()
   }

  ngOnInit() {
  }



}
