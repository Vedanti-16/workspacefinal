import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = "https://8080-adbbbcccdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/EmployeeDb";
  httpHeaders:HttpHeaders = new HttpHeaders({
    Accept:'application/json'
  })

  constructor(private http:HttpClient) { }

  getData() : Observable<any[]>{
    return this.http.get<any>(this.url,{headers:this.httpHeaders});
  }

  updateData(id:number, data:any) : Observable<any>{
    return this.http.put(this.url,data,{headers:this.httpHeaders});
  }
}
