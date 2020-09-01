import { Component, OnInit } from '@angular/core';
const data = require("../../../assets/people/info.json");
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students=[]
  constructor() {
    this.students= data.people;
   }

  ngOnInit() {
    console.log(this.students);
    
  }

}
