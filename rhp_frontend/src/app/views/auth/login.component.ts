import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {data} from "autoprefixer";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userType = "";

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })


  constructor(private service: AuthService, private token: TokenService) {
  }

  ngOnInit(): void {
  }

  onCheckUserType(event: any) {
    this.userType = event.target.value;
    console.log(this.userType);
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {

      this.service.login(this.loginForm.value).subscribe(
        (res: any) => {
          if (res != null) {
            localStorage.setItem('token', res.token);
            const decodedToken = this.token.decodeToken(res.token);

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
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }
}
