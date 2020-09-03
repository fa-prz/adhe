import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentsModule } from '../students/students.module';
import { AppointmentsModule } from '../appointments/appointments.module';


const MODULE_ROUTES = [
    { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(MODULE_ROUTES),
    CommonModule,
    StudentsModule,
    AppointmentsModule
  ]
  ,
  declarations: [DashboardComponent]
})
export class DashboardModule { }
