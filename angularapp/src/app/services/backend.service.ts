import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

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

  updateData(id:number, data:any){
    this.http.put(this.url + "/updatedata/" +id,data,{headers:this.httpHeaders})
    .subscribe(success => {
      console.log(success);
   },
     error=>{
        console.log(error);
     });
  }

  deleteData(id:number):Observable<number>{
    return this.http.delete<number>(this.url+"/deletedata/"+id,{headers:this.httpHeaders});
  }

  postData(data:IEmployee) : Observable<IEmployee>{
    return this.http.post<IEmployee>(this.url,data,{headers:this.httpHeaders});
  }

  getById(id:number) : Observable<any>{
    return this.http.get<any>(this.url+"/getbyid/"+id,{headers:this.httpHeaders})
  }
}
