import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  today = moment().format('LLLL');
  appointments=[
    {date:this.today,location:'Tutorías',student:{ name: "Claudita Alvarez Ruiz", "photo": "../../../assets/people/photos/0.jpg", id: "2031890", major: "Ingeniería en Desarrollo de Software" },notes:null},
    {date:this.today,location:'Tutorías',student:{ name: "Cordaro Vargas Martinez", "photo": "../../../assets/people/photos/1.jpg", id: "2031891", major: "Ingeniería en Desarrollo de Software" },notes:null},
    {date:this.today,location:'Tutorías',student:{ name: "Yaiza Gil Guerrero", "photo": "../../../assets/people/photos/2.jpg", id: "2031892", major: "Ingeniería en Desarrollo de Software" },notes:null},
    {date:this.today,location:'Tutorías',student:{name: "Claudita Alvarez Ruiz", "photo": "../../../assets/people/photos/0.jpg", id: "2031890", major: "Ingeniería en Desarrollo de Software"},notes:null},
    {date:this.today,location:'Tutorías',student:{ name: "Cordaro Vargas Martinez", "photo": "../../../assets/people/photos/1.jpg", id: "2031891", major: "Ingeniería en Desarrollo de Software" },notes:null},
    {date:this.today,location:'Tutorías',student:{ name: "Yaiza Gil Guerrero", "photo": "../../../assets/people/photos/2.jpg", id: "2031892", major: "Ingeniería en Desarrollo de Software" },notes:null}
  ];
  constructor() { }

  ngOnInit() {
  }

}
