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

  updateData(id:number, data:any){
    this.http.put(this.url + "/updatedata/" +id,data,{headers:this.httpHeaders})
    .subscribe(success => {
      console.log(success);
   },
     error=>{
        console.log(error);
     });
  }

  deleteData(id:number){
    this.http.delete(this.url+"/deletedata/"+id,{headers:this.httpHeaders})
    .subscribe();
  }
}
