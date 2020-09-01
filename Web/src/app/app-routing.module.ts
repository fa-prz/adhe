import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', redirectTo: 'ingresar', pathMatch: 'full' },
    { path: 'ingresar', loadChildren: './components/login/login.module#LoginModule'},
    { path: 'inicio', loadChildren: './layout/layout.module#LayoutModule'},
    { path: '**', redirectTo: 'inicio'}
];

export const routing = RouterModule.forRoot(ROUTES);
