import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from "./login.component";


const MODULE_ROUTES = [
    { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule ,FormsModule,
    RouterModule.forChild(MODULE_ROUTES),
  	ToastrModule.forRoot()
  ]
  ,
  declarations: [LoginComponent]
  ,providers:[
  ]
})
export class LoginModule { }


