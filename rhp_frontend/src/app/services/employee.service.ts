import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../const";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private tokeService: TokenService) { }


  getEmployeeProfile() {
    // extract email from token
    const email = this.tokeService.getSubject();
    return this.http.get(API_URL+'employee/profile?email='+email);
  }

  createLeaveRequest(leaveRequest: any) {
    return this.http.post(API_URL+'employee/leave-request', leaveRequest);
  }

  updateEmployeeProfile(value: any) {
    return this.http.post(API_URL+'employee/profile/update', value);
  }

}
