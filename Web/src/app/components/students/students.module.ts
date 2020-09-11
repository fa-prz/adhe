import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { ProfileModule } from './profile/profile.module';
import { DatesComponent } from './dates/dates.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProfileModule
  ],
  declarations: [ StudentsComponent, DatesComponent],
  exports: [ StudentsComponent ]
})
export class StudentsModule { }
