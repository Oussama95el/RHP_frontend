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
}