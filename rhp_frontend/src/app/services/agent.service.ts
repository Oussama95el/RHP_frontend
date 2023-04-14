import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../const";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  addEmployee(data: any) {
    return this.http.post(API_URL+'agent/register/employee', data);
  }

  getEmployees() {
    return this.http.get(API_URL+'agent/employees');
  }

  getEmployee(id: any) {
    return this.http.get(API_URL+'agent/employee/profile?id='+id);
  }

  registerPaySlip(data: any) {
    return this.http.post(API_URL+'agent/register/payslip', data);
  }
}
