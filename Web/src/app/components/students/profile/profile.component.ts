import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  student =  { name: "Claudita Alvarez Ruiz", "photo": "../../../assets/people/photos/0.jpg", id: "2031890", major: "Ingeniería en Desarrollo de Software" };
  constructor() { }

  ngOnInit() {
  }

}
