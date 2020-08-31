import { ViewChild,
         Component,
         OnInit,
         ViewContainerRef} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],

})


export class NavigationComponent implements OnInit {

    userPages: any =[
        {name:"Inicio",action:"inicio/dashboard",icon:"view-dashboard"},

    ];
   
    constructor(
        public api :ApiService
    ) {

    }
    ngOnInit(){}



}
