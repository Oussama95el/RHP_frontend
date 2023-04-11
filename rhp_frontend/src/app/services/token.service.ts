import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token = localStorage.getItem('token');

  constructor() {
  }

  decode: any = (this.token != null) ? jwt_decode(this.token) : null;

  // function that takes token as parameter and returns decoded token
  decodeToken(token: string) {
    return jwt_decode(token);
  }

  getSubject() {
    return this.decode.sub;
  }

  getFirstName() {
    return this.decode.firstname;
  }

  getLastName() {
    return this.decode.lastname;
  }

  getEmail() {
    return this.decode.email;
  }
}
