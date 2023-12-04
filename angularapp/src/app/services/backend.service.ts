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

  public ApiURL = "https://8081-adbbbcccdfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api"
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
 
  getEnquiries(): Observable<any>
  {
    return this.http.get<any>(this.ApiURL + "/enquiry");
  }
 
  createEnquiry(enquiry:Enquiry):Observable<Enquiry>
  {
    return this.http.post<Enquiry>(this.ApiURL+"/course/enquiry",enquiry,this.httpOptions)
  }

  //===============================================================


  getCourses(): Observable<any>
  {
    return this.http.get<any>(this.ApiURL+"/courses");
  }

  getCourse(id:number):Observable<any>
  {
    return this.http.get<any>(this.ApiURL+"/course/"+id)
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
  

  //==================================PAYMENTS===========================

  private api = "https://8081-adbbbcccdfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api";

  getPayments() : Observable<any>{
    return this.http.get<any>(this.api+"/payments");
  }

  postPayments(payment:any) : Observable<any>{
    return this.http.post<any>(this.api+"/make-payment",payment);
  }

  //================================ADMISSIONS==============================

  getAdmissions() : Observable<any>{
    return this.http.get<any>(this.api+"/admissions")
  }

  postAdmissions(adm:any) : Observable<any>{
    return this.http.post<any>(this.api+"/addAdmission",adm)
  }

  getAdmission(id:number) : Observable<any>{
    return this.http.get<any>(this.api+"/admission/"+id);
  }

}
