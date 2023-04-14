import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManagerService} from "../../../services/manager.service";
import {map} from "rxjs";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styles: [
    '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) {\n' +
    '  background-color: #f5f5f5;\n' +
    '  color: #333;\n' +
    '}' +
    '' +
    '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {\n' +
    '  background-color: #f5f5f5;\n' +
    '  color: #333;\n' +
    '}' +
    '' +
    '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {\n' +
    '  color: #333;\n' +
    '}' +
    ''
  ]
})
export class RegisterAgentComponent {
  agentForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private service: ManagerService) {

  }

  response: any;

  addRhAgent() {
    if (this.agentForm.valid) {
      console.log(this.agentForm.value);
      this.service.addAgent(this.agentForm.value).pipe()
        .subscribe((data: any) => {
          this.response = data;
          if (this.response.status != null) {
            Swal.fire({
              icon: 'success',
              title: 'Agent added successfully',
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        }
      );
    }
  }

  // method that generate password 8 characters or more
  generatePassword() {
    let length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n))+ "!@#$%^&*";
    }
    console.log(retVal);
    this.agentForm.patchValue({ password: retVal });
  }
}
