import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
	constructor(
		private router: Router,
	) { }
	ngOnInit() {
	}

}
