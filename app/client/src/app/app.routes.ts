import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login/login.component';
import {ListingComponent} from "./listing/listing.component";

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'list',    component: ListingComponent },
  { path: '**',    component: NoContentComponent },
];
