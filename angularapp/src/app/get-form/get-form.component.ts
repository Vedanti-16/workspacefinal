import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrls: ['./get-form.component.css']
})

export class GetFormComponent implements OnInit {

  empdata:any[] = [];
  

  constructor(private http:BackendService,private route:Router) {
    console.log("constructor...")
    this.http.getData().subscribe(data=>{
      this.empdata = data;
      console.log(this.empdata);
    });
   // console.log(this.empdata)
  }

  ngOnInit() {
    this.http.getData().subscribe(data=>this.empdata = data);
  }

}
