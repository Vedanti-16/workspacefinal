import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = "https://8080-adbbbcccdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/EmployeeDb";

  constructor(private http:HttpClient) { }

  getData() : Observable<any[]>{
    let httpHeaders:HttpHeaders = new HttpHeaders({
      Accept:"application/json"
    });
    return this.http.get<any>(this.url,{headers:httpHeaders});
  }

  updateData(){

  }
}
