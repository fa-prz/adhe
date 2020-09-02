import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'login', loadChildren: () => import('../app/components/login/login.module').then(m => m.LoginModule)},
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
