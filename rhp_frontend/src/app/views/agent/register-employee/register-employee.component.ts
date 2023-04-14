import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManagerService} from "../../../services/manager.service";
import {map} from "rxjs";
import Swal from "sweetalert2";
import {AgentService} from "../../../services/agent.service";

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styles:
    [
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
export class RegisterEmployeeComponent {

  employeeForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  constructor(private service: AgentService) {

  }
  response: any;
  addEmployee() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.service.addEmployee(this.employeeForm.value).pipe(
        map((res: any) => {
            this.response = res;
          }
        )).subscribe( r => {
        if (this.response.status != null) {
          Swal.fire({
            title: 'Success!',
            text: 'Agent added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(r => {
            this.employeeForm.reset();
          })
        }else {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Ok'
          }).then(r => this.employeeForm.reset())
        }
      })

    }else {
      console.log('error');
    }
  }

  generatePassword() {
    let length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    this.employeeForm.patchValue({ password: retVal +'@' });
  }
}
