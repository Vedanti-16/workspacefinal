import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFormComponent } from './get-form/get-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';


const routes: Routes = [
  {path:'',component:GetFormComponent},
  {path:'editlink/:employeeId',component:EditFormComponent},
  {path:'deletelink/:employeeId',component:DeleteEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
