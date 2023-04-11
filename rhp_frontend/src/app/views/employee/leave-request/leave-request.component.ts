import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {TokenService} from "../../../services/token.service";
import {EmployeeService} from "../../../services/employee.service";
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

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private tokenService: TokenService,
              private employeeService: EmployeeService) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  showSuccess() {
    this.snackBar.open('Leave request sent successfully', 'Close', {
      duration: 2000,
    });
  }

  showError() {
    this.snackBar.open('Error sending leave request', 'Close', {
      duration: 2000,
    });
  }

  createForm() {
    this.leaveRequestForm = this.fb.group({
      type: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comment: [''],
      userEmail: [this.tokenService.getSubject()]
    });
  }

  submitForm(): void {
    if (this.leaveRequestForm.valid) {
      // format date to yyyy-MM-dd as string
      this.leaveRequestForm.value.startDate = this.leaveRequestForm.value.startDate.toISOString().slice(0, 10);
      this.leaveRequestForm.value.endDate = this.leaveRequestForm.value.endDate.toISOString().slice(0, 10);

      this.employeeService.createLeaveRequest(this.leaveRequestForm.value).pipe(
      ).subscribe(
        (data: any) => {
          if (data.status === 200) {
            this.showSuccess();
            this.leaveRequestForm.reset();
          } else {
            this.showError();
          }
        }
      )

    }

  }
}
