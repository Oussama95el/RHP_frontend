import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TokenService} from "../../../services/token.service";
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
})
export class LeaveRequestComponent {

  leaveRequestForm!: FormGroup;
  tomorrow: Date = new Date(new Date().setDate(new Date().getDate() + 1));

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
      const startDate = new Date(this.leaveRequestForm.value.startDate);
      const endDate = new Date(this.leaveRequestForm.value.endDate);
      this.leaveRequestForm.value.startDate = startDate.toISOString().slice(0, 10);
      this.leaveRequestForm.value.endDate = endDate.toISOString().slice(0, 10);

      this.employeeService.createLeaveRequest(this.leaveRequestForm.value).pipe(
      ).subscribe(
        (data: any) => {
          if (data.status != null) {
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
