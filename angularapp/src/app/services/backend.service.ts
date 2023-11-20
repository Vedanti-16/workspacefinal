import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = "https://8080-adbbbcccdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/EmployeeDb";

  constructor(private http:HttpClient) { }

  getData() : Observable<any[]>{
    return this.http.
  }
}
