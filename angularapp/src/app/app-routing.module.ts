import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFormComponent } from './get-form/get-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { PostEmpComponent } from './post-emp/post-emp.component';
import { GetempbyidComponent } from './getempbyid/getempbyid.component';
import { CreateAdmissionsComponent } from './create-admissions/create-admissions.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ViewAdmissionsComponent } from './view-admissions/view-admissions.component';


const routes: Routes = [
  // {path:'',component:GetFormComponent},
  {path:'editlink/:employeeId',component:EditFormComponent},
  {path:'deletelink/:employeeId',component:DeleteEmpComponent},
  {path:'addemplink',component:PostEmpComponent},
  {path:'getbyid/:employeeId',component:GetempbyidComponent},
  //paths for admission
  {path:'admForm/:admissionId',component:CreateAdmissionsComponent},
  {path:'viewCourses',component:ViewCoursesComponent},
  {path:'enquiryForm',component:EnquiryFormComponent},
  {path:"viewAdm",component:ViewAdmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
