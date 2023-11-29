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
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component'

@NgModule({
  declarations: [
    AppComponent,
    GetFormComponent,
    EditFormComponent,
    DeleteEmpComponent,
    PostEmpComponent,
    GetempbyidComponent,
    EnquiryFormComponent
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
