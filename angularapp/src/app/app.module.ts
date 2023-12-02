import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetFormComponent } from './get-form/get-form.component';
import {HttpClientModule} from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { PostEmpComponent } from './post-emp/post-emp.component';
import { GetempbyidComponent } from './getempbyid/getempbyid.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewAdmissionsComponent } from './view-admissions/view-admissions.component';
import { CreateAdmissionsComponent } from './create-admissions/create-admissions.component';
import { StudentNavComponent } from './student-nav/student-nav.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component'

@NgModule({
  declarations: [
    AppComponent,
    GetFormComponent,
    EditFormComponent,
    DeleteEmpComponent,
    PostEmpComponent,
    GetempbyidComponent,
    EnquiryFormComponent,
    ViewEnquiryComponent,
    ViewAdmissionsComponent,
    CreateAdmissionsComponent,
    StudentNavComponent,
    ViewCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
