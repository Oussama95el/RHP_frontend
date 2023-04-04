import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './views/auth/login.component';
import {AuthComponent} from "./layouts/auth/auth.component";
import {AuthNavbarComponent} from "./components/navbars/auth-navbar/auth-navbar.component";
import { SupportComponent } from './views/support/support.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpInterceptorServiceInterceptor} from "./services/http-interceptor-service.interceptor";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AdminComponent} from "./layouts/admin/admin.component";
import {AdminDashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {AdminNavbarComponent} from "./components/navbars/admin-navbar/admin-navbar.component";
import {HeaderStatsComponent} from "./components/headers/header-stats/header-stats.component";
import {FooterAdminComponent} from "./components/footer-admin/footer-admin.component";
import {CardStatsComponent} from "./components/cards/card-stats/card-stats.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {ProfileComponent} from "./views/profile/profile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { EmployeeComponent } from './layouts/Employee/employee.component';
import {RegisterRhComponent} from "./views/admin/register-rh/register-rh.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

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

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorServiceInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
