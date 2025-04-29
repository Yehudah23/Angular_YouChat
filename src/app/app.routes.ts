import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
 {path:'enter',component:SignupComponent},
 {path:'open',component:SigninComponent},
 {path:'info',component:DashboardComponent},
];
