import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'home',      component: HomeComponent },
  { path: '**',    component: NoContentComponent },
];
