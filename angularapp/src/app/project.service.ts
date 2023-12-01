import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = "";

  constructor(private http: HttpClient) { }

  //-------------------COURSES ADMIN----------------------------------

  getAllCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/course`);
  }

  saveCourseByAdmin(courseData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/course`,courseData);
  }

  deleteCourseByAdmin(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/course/${courseId}`);
  }

  updateCourseByAdmin(courseId: number, courseData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/course/${courseId}`,courseData);
  }

  getStudentCourses(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/api/student/course`)
  }

  //-------------------------

  getAllEnquiriesByAdmin() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/api/enquiry`);
  }

  getEnquiryByAdmin(enquiryId: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/api/enquiry/${enquiryId}`);
  }


}
