import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../const";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = API_URL + 'auth/authenticate';
  loggedIn: Boolean = !!localStorage.getItem('token');
  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(data: any) {
    return this.http.post(this.loginUrl,data);
  }

  checkTokenRole() {
    const token = localStorage.getItem('token');
    const decodedToken = token != null ? this.tokenService.decodeToken(token) : null;
    // @ts-ignore
    switch (decodedToken.role) {
      case 'ADMIN':
        window.location.href = '/admin/dashboard';
        break;
      case 'RH_MANAGER':
        window.location.href = '/manager/dashboard';
        break;
      case 'RH_AGENT':
        window.location.href = '/agent/dashboard';
        break;
      case 'EMPLOYEE':
        window.location.href = '/employee/dashboard';
        break;
      default:
    }
  }

  logout() {
    this.http.post(API_URL + 'auth/logout', {}).subscribe();
  }

}
