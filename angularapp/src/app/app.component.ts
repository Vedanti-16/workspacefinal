import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  // loginform = new FormGroup({
  //   user:new FormControl('',[Validators.required]),
  //   password:new FormControl('',[Validators.required, Validators.minLength(5)])
  // })

  // loginuser(){
  //   console.log(this.loginform.value);
  // }

  // get user(){
  //   return this.loginform.get('user');
  // }

  // get password(){
  //   return this.loginform.get('password');
  // }

  handlesave(form:NgForm);
}
