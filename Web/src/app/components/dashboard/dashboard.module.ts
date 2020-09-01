import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StudentsModule } from '../students/students.module';


const MODULE_ROUTES = [
    { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(MODULE_ROUTES),
    MatTabsModule,
    CommonModule,
    StudentsModule
  ]
  ,
  declarations: [DashboardComponent]
})
export class DashboardModule { }
