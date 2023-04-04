import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  registerUrl = 'http://localhost:8080/admin/register/manager';

  constructor(private http: HttpClient) { }


  registerManager(data: any) {
    return this.http.post(this.registerUrl,data);
  }
}
