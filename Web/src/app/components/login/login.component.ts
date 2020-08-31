import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';

// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApiService } from '../../services/api.service';

import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public procesando: boolean = false;

  constructor(

    private router: Router,
    // public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private api: ApiService) {
    // this.toastr.setRootViewContainerRef(vcr);
    if(localStorage.getItem("token")){
        let role = JSON.parse(localStorage.getItem("user")).role.name;
        if(role =="Admin"){
          this.router.navigate(['/inicio/administrador'])
        }
        else if(role =="User"){
          this.router.navigate(['/inicio/usuario'])
        }else if(role =="Client"){
          this.router.navigate(['/inicio/cliente'])
        }else if(role =="Comercial"){
          this.router.navigate(['/inicio/comercial/dashboard'])
        }
    }
  }

  ngOnInit() {
    if (localStorage.getItem('cambio')) {
      // tslint:disable-next-line:prefer-const
      // this.eliminado(localStorage.getItem('cambio'));
      localStorage.clear();
    }
    if (localStorage.getItem('creado')) {
      // tslint:disable-next-line:prefer-const
      // this.creado(localStorage.getItem('creado'));
      localStorage.clear();
    }
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  login(user) {
    this.procesando = true
    this.api.post("/Usuarios/login", user, false).subscribe((token: any) =>{
      localStorage.clear()
      localStorage.setItem("token",token.id)
      localStorage.setItem("ttl", moment().add(1209600, 's').toISOString() )
      this.api.token= token.id;
      this.api.get("/Usuarios/withCredentials", true).subscribe((userFromServer: any)=>{
        this.procesando = false;
        localStorage.setItem("user", JSON.stringify(userFromServer))
          let role = JSON.parse(localStorage.getItem("user")).role.name;
            if(role =="Admin"){
              this.router.navigate(['/inicio/administrador'])
            }
            else if(role =="User"){
              this.router.navigate(['/inicio/usuario'])
            }else if(role =="Client"){
              this.router.navigate(['/inicio/cliente'])
            }else if(role =="Comercial"){
              this.router.navigate(['/inicio/comercial/dashboard'])
        }
      })
    }, (error: any) => {
      this.procesando = false;
    })
  }
}
