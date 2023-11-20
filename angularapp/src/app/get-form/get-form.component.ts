import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrls: ['./get-form.component.css']
})
export class GetFormComponent implements OnInit {

  empdata:any[] = [];

  constructor(private http:BackendService) {
    this.http.getData().subscribe(data=>this.empdata = data);
   }

  ngOnInit() {
  }

}
