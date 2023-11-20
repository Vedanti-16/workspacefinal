import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrls: ['./get-form.component.css']
})
export class GetFormComponent implements OnInit {

  constructor(private http:BackendService) {
    return this.http.getData().subscribe(data=>this.empdata = data);
   }

  ngOnInit() {
  }


}
