import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }


  getAdminStatistics() {
    return this.http.get('http://localhost:8080/admin/statistics');
  }
}
