import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../const";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }


  addAgent(agent: any) {
    return this.http.post(API_URL+'manager/register/agent', agent);
  }


  getAllLeaveRequests() {
    return this.http.get(API_URL+'manager/leave-requests');
  }


  editLeaveRequest(id: any, status: any) {
    return this.http.post(API_URL+'manager/leave-requests/edit', {id, status});
  }
}
