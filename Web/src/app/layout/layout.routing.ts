import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'inicio', pathMatch: 'full' },
          { path: 'inicio', children:[
            {path:'',loadChildren: () => import('../components/dashboard/dashboard.module').then(m => m.DashboardModule)},
            { path: 'estudiantes', loadChildren: () => import('../components/students/profile/profile.module').then(m => m.ProfileModule)},
          ]},
          { path: '***',redirectTo:'inicio'},
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
