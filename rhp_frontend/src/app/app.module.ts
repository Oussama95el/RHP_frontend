import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './views/auth/login.component';
import {AuthComponent} from "./layouts/auth/auth.component";
import {AuthNavbarComponent} from "./components/navbars/auth-navbar/auth-navbar.component";
import { SupportComponent } from './views/support/support.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpInterceptorServiceInterceptor} from "./services/http-interceptor-service.interceptor";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AdminComponent} from "./layouts/admin/admin.component";
import {AdminDashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {AdminNavbarComponent} from "./components/navbars/admin-navbar/admin-navbar.component";
import {HeaderStatsComponent} from "./components/headers/header-stats/header-stats.component";
import {FooterAdminComponent} from "./components/footer-admin/footer-admin.component";
import {CardStatsComponent} from "./components/cards/card-stats/card-stats.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {ProfileComponent} from "./views/employee/profile/profile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { EmployeeComponent } from './layouts/Employee/employee.component';
import {RegisterRhComponent} from "./views/admin/register-rh/register-rh.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CardTableComponent} from "./components/cards/card-table/card-table.component";
import {SidebarManagerComponent} from "./components/sidebar/sidebar-manager.component";
import { ManagerComponent } from './layouts/manager/manager/manager.component';
import { ManagerDashboardComponent } from './views/manager/dashboard/manager-dashboard.component';
import { RegisterAgentComponent } from './views/manager/register-agent/register-agent.component';
import { AgentComponent } from './layouts/agent/agent.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SidebarAgentComponent } from './components/sidebar/sidebar-agent.component';
import { AgentDashboardComponent } from './views/agent/dashboard/agent-dashboard.component';
import { RegisterEmployeeComponent } from './views/agent/register-employee/register-employee.component';
import { SidebarEmployeeComponent } from './components/sidebar/sidebar-employee.component';
import { DashboardEmployeeComponent } from './views/employee/dashboard-employee/dashboard-employee.component';
import { LeaveRequestComponent } from './views/employee/leave-request/leave-request.component';
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatNativeDateModule} from "@angular/material/core";
import { ProfileFormComponent } from './components/forms/profile-form/profile-form.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AbsenceChartComponent } from './components/charts/absence-chart/absence-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { UsersChartComponent } from './components/charts/users-chart/users-chart.component';
import {CardProfileComponent} from "./components/cards/card-profile/card-profile.component";
import {PayslipAgentComponent} from "./views/agent/payslip/payslip.component";
import {PayslipTableComponent} from "./components/cards/card-table/payslip-table/payslip-table.component";
import {PayslipComponent} from "./views/employee/payslip/payslip.component";
import { PayslipFormComponent } from './components/forms/payslip-form/payslip-form.component';
import {ManagerLeaveRequestComponent} from "./views/manager/leave-request/manager-leave-request.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    AuthNavbarComponent,
    SupportComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    CardStatsComponent,
    SidebarComponent,
    ProfileComponent,
    EmployeeComponent,
    RegisterRhComponent,
    CardTableComponent,
    SidebarManagerComponent,
    ManagerComponent,
    ManagerDashboardComponent,
    RegisterAgentComponent,
    AgentComponent,
    SidebarAgentComponent,
    AgentDashboardComponent,
    RegisterEmployeeComponent,
    SidebarEmployeeComponent,
    DashboardEmployeeComponent,
    LeaveRequestComponent,
    ProfileFormComponent,
    AbsenceChartComponent,
    UsersChartComponent,
    CardProfileComponent,
    PayslipTableComponent,
    PayslipAgentComponent,
    PayslipComponent,
    PayslipFormComponent,
    ManagerLeaveRequestComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        SweetAlert2Module.forRoot(),
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCheckboxModule,
        FormsModule,
        NgChartsModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorServiceInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
