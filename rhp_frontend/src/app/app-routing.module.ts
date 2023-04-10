import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/auth/login.component";
import {AuthComponent} from "./layouts/auth/auth.component";
import {SupportComponent} from "./views/support/support.component";
import {AdminComponent} from "./layouts/admin/admin.component";
import {AdminDashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {ProfileComponent} from "./views/employee/profile/profile.component";
import {EmployeeComponent} from "./layouts/Employee/employee.component";
import {RegisterRhComponent} from "./views/admin/register-rh/register-rh.component";
import {ManagerComponent} from "./layouts/manager/manager/manager.component";
import {ManagerDashboardComponent} from "./views/manager/dashboard/manager-dashboard.component";
import {isAdmin, isAgent, isAuthorized, isEmployee, isManager} from "./guards";
import {RegisterAgentComponent} from "./views/manager/register-agent/register-agent.component";
import {AgentComponent} from "./layouts/agent/agent.component";
import {AgentDashboardComponent} from "./views/agent/dashboard/agent-dashboard.component";
import {RegisterEmployeeComponent} from "./views/agent/register-employee/register-employee.component";
import {DashboardEmployeeComponent} from "./views/employee/dashboard-employee/dashboard-employee.component";
import {LeaveRequestComponent} from "./views/employee/leave-request/leave-request.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: "support",
    component: SupportComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent, canActivate: [isAuthorized]},
      {path: '', redirectTo: 'login', pathMatch: 'full'},

    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'register_rh', component: RegisterRhComponent},
    ],
    canActivate: [isAdmin]
  },
  {
    path: 'employee', component: EmployeeComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardEmployeeComponent},
      {path: 'leave-request', component: LeaveRequestComponent},
      {path: 'profile', component: ProfileComponent},
    ],
    canActivate: [isEmployee]
  },
  {
    path: 'manager',
    component: ManagerComponent,
    children:
      [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: ManagerDashboardComponent},
        {path: 'register_agent', component: RegisterAgentComponent},
      ],
    canActivate: [isManager]
  },
  {
    path: 'agent',
    component: AgentComponent,
    children:
      [
        {path: '', redirectTo: 'dashboard', pathMatch: "full"},
        {path: 'dashboard', component: AgentDashboardComponent},
        {path: 'register_employee', component: RegisterEmployeeComponent},

      ],
    canActivate: [isAgent]
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
