import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
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
      ''+
      '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {\n' +
      '  border-bottom-color: #3f51b5;\n' +
      '}' +
      '::ng-deep mat-datepicker-toggle svg {\n' +
      '  fill: black; /* set the fill color to blue */\n' +
      '}'+
    //   text black
      '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) {'+
      'color: #333;'+
      '}'+
      '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {'+
      'color: #333;'+
      '}'+
      '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {'+
      'color: #333;'+
      '}'+
      '::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {'+
      'border-bottom-color: #3f51b5;'+
      '}'+
      '::ng-deep mat-datepicker-toggle svg {'+
      'fill: black;'+
      '}'

    ]
})
export class LeaveRequestComponent {

  leaveRequestForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.createForm();
  }

  showSuccess() {
    this.snackBar.open('Leave request sent successfully', 'Close', {
      duration: 2000,
    });
  }

  createForm() {
    this.leaveRequestForm = this.fb.group({
      type: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comment: ['']
    });
  }

  submitForm(): void {
    console.log(this.leaveRequestForm.value);
  }

}
