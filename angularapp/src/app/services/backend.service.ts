import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';
import { Enquiry } from '../enquiry';

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

  // ============================================================================================

  public ApiURL = "https://8080-cabbaacddbbbfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api"
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
 
  getEnquiries(): Observable<any>
  {
    return this.http.get<any>(this.ApiURL + "/enquiry");
  }
 
  createEnquiry(enquiry:any):Observable<any>
  {
    return this.http.post<any>(this.ApiURL+"/course/enquiry",enquiry,this.httpOptions)
  }
  

  //===============================================================


  getCourses(): Observable<any>
  {
    return this.http.get<any>(this.ApiURL+"/course");
  }

  getCourse(id:number):Observable<any>
  {
    return this.http.get<any>(this.ApiURL+"/"+id)
  }
 
  createCourse(course:any):Observable<any>
  {
    return this.http.post<any>(this.ApiURL,course,this.httpOptions)
  }
 
  deleteCourse(id:number):Observable<any>
  {
    return this.http.delete<any>(this.ApiURL+"/"+id)
  }
 
  updateCourse(id:number,course:any):Observable<any>
  {
    return this.http.put<any>(this.ApiURL+"/"+course.id,course,this.httpOptions)
  }   
  
}
