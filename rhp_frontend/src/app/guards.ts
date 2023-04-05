import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";


export const isAuthorized: CanActivateFn = () => {
  const loginService = inject(AuthService);

  if (!loginService.loggedIn) {
    return true; // user is logged in, allow access to the route
  }

  loginService.checkTokenRole();

  return false; // user is not logged in, prevent access to the route
}


export const isAdmin: CanActivateFn = () => {
  const loginService = inject(AuthService);
  const tokenService = inject(TokenService);

  if (loginService.loggedIn) {
    const token = localStorage.getItem('token');
    const decodedToken = token != null ? tokenService.decodeToken(token) : null;
    // @ts-ignore
    switch (decodedToken.role) {
      case 'ADMIN':
        return true;
      default:
        loginService.checkTokenRole();
        return false;
    }
  } else {
    loginService.checkTokenRole();
    return false;
  }
}
 export const isManager: CanActivateFn = () => {
    const loginService = inject(AuthService);
    const tokenService = inject(TokenService);

    if (loginService.loggedIn) {
      const token = localStorage.getItem('token');
      const decodedToken = token != null ? tokenService.decodeToken(token) : null;
      // @ts-ignore
      switch (decodedToken.role) {
        case 'RH_MANAGER':
          return true;
        default:
          loginService.checkTokenRole();
          return false;
      }
    }else {
      loginService.checkTokenRole();
      return false;
    }
}

export const isAgent: CanActivateFn = () => {
  const loginService = inject(AuthService);
  const tokenService = inject(TokenService);

  if (loginService.loggedIn) {
    const token = localStorage.getItem('token');
    const decodedToken = token != null ? tokenService.decodeToken(token) : null;
    // @ts-ignore
    switch (decodedToken.role) {
      case 'RH_AGENT':
        return true;
      default:
        loginService.checkTokenRole();
        return false;
    }
  }else {
    loginService.checkTokenRole();
    return false;
  }
}

export const isEmployee: CanActivateFn = () => {
  const loginService = inject(AuthService);
  const tokenService = inject(TokenService);

  if (loginService.loggedIn) {
    const token = localStorage.getItem('token');
    const decodedToken = token != null ? tokenService.decodeToken(token) : null;
    // @ts-ignore
    switch (decodedToken.role) {
      case 'EMPLOYEE':
        return true;
      default:
        loginService.checkTokenRole();
        return false;
    }
  }else {
    loginService.checkTokenRole();
    return false;
  }
}
