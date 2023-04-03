import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required , Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor() {}

  ngOnInit() {}

  addRhManager() {
    console.log(this.managerForm.value);
  }
}
