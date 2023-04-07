import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../services/admin.service";
import {map} from "rxjs";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register-rh',
  templateUrl: './register-rh.component.html',
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
export class RegisterRhComponent implements OnInit {
  managerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private service: AdminService) {
  }

  ngOnInit() {
  }

  response: any;

  addRhManager() {
    if (this.managerForm.valid) {
      this.service.registerManager(this.managerForm.value).pipe(
        map((res: any) => {
            this.response = res;
            if (this.response != null && this.response.status == 200) {
              Swal.fire({
                  title: 'Success!',
                  text: 'Manager added successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                }
              ).then(r => {
                this.managerForm.reset();
              })
            }else {
              Swal.fire({
                  title: 'Error!',
                  text: 'Error adding manager',
                  icon: 'error',
                  confirmButtonText: 'Ok'
                }
              ).then(r => {
                this.managerForm.reset();
              })
            }
          }
        )).subscribe();
    }
  }
}
