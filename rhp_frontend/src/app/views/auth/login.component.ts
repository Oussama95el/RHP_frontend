import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {data} from "autoprefixer";

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


  constructor(private service: AuthService) {
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
      console.log(this.loginForm.value);

      this.service.login(this.loginForm.value).subscribe(
        (res: any) => {
          if (res != null) {
            console.log(res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('userType', res.role);
            if (res.role == 'ADMIN') {
              window.location.href = '/admin/dashboard';
            } else {
              console.log("Invalid credentials");
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
