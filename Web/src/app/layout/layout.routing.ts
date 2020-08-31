import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [

    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'dashboard',  loadChildren: '../components/dashboard/dashboard.module#DashboardModule' },
        { path: 'login',  loadChildren: '../components/login/login.module#LoginModule' },
    ]}
];
console.log('Layout');
export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);