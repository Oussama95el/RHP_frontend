import { Component } from '@angular/core';
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
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  constructor(private service: ManagerService) {

  }
  response: any;
  addRhAgent() {
    if (this.agentForm.valid) {
      console.log(this.agentForm.value);
      this.service.addAgent(this.agentForm.value).pipe(
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
            this.agentForm.reset();
          })
        }else {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Ok'
          }).then(r => this.agentForm.reset())
        }
      })

    }else {
      console.log('error');
    }
  }
}
