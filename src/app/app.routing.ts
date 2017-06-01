import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, //catch any unfound routes and redirect to home page
  { path: 'home', component: HomeComponent },
  { path: 'detail/:day', component: DetailComponent },
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
