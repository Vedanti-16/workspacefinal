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
  route: any;

  constructor(private http:BackendService, route:Router) {
    this.http.getData().subscribe(data=>this.empdata = data);
   }

   handledelete(id:number){
    this.http.deleteData(id).subscribe()
    this.route.navigate(['']);
  }

  ngOnInit() {
  }

}
