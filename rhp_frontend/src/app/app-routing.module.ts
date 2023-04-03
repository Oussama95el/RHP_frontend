import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/auth/login.component";
import {AuthComponent} from "./layouts/auth/auth.component";
import {SupportComponent} from "./views/support/support.component";
import {AdminComponent} from "./layouts/admin/admin.component";
import {AdminDashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {EmployeeComponent} from "./layouts/Employee/employee.component";
import {RegisterRhComponent} from "./views/admin/register-rh/register-rh.component";

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path:"support", component: SupportComponent},
  {path: 'auth', component: AuthComponent ,
    children: [
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'},

    ]},
  { path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'register_rh', component: RegisterRhComponent},
    ]
  },
  { path: 'employee', component: EmployeeComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
    ]},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
