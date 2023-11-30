import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURL = "";

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  saveCourseByAdmin(courseData: any): Observable<any> {
    return this.http.post<any>(this.apiURL,courseData);
  }

  deleteCourseByAdmin(courseId: number): Observable<any> {
    return this.http.delete<any>(this.apiURL);
  }``

  updateCourseByAdmin(courseId: number, courseData: any): Observable<any> {
    return this.http.put<any>(this.apiURL+"/"+courseId,courseData);
  }


  getStudentCourses(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}
