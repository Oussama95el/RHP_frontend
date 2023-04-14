import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AgentService} from "../../../services/agent.service";
import {UserInterface} from "../../../Interfaces/User.interface";
import Swal from "sweetalert2";

@Component({
  selector: 'app-payslip-form',
  templateUrl: './payslip-form.component.html',
  styles:  [
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
export class PayslipFormComponent {

  months = [
    { value: 'january', viewValue: 'January' },
    { value: 'february', viewValue: 'February' },
    { value: 'march', viewValue: 'March' },
    { value: 'april', viewValue: 'April' },
    { value: 'may', viewValue: 'May' },
    { value: 'june', viewValue: 'June' },
    { value: 'july', viewValue: 'July' },
    { value: 'august', viewValue: 'August' },
    { value: 'september', viewValue: 'September' },
    { value: 'october', viewValue: 'October' },
    { value: 'november', viewValue: 'November' },
    { value: 'december', viewValue: 'December' },
  ];

  @Output() dataEvent = new EventEmitter<boolean>();

  @Input() profile: any;
  @Input() user!: UserInterface;

  today = new Date();
  form:  FormGroup;
  minDate: Date = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
  maxDate: Date = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 30);
  constructor( private fb: FormBuilder , private service: AgentService) {
      this.form = this.fb.group({
        date: ['', Validators.required],
        month: ['', Validators.required],
        netSalary: [{ value: '', disabled: true }],
        deductions: ['', Validators.required],
        grossSalary: [{ value: '', disabled: true }],
        employee: [{ value: '', disabled: true }],
        taxRate: [{value:'', disabled: true}],
        taxAmount: [{ value: '', disabled: true }],
        overtimehours: ['', Validators.required],
        benefits: [{ value: '', disabled: true }]
      });

  }

  ngOnInit(): void {

  }

  onSubmit() {
    const data = {
      date: this.form.get('date')?.value,
      month: this.form.get('month')?.value,
      netSalary: this.profile.netSalary,
      deductions: this.form.get('deductions')?.value,
      grossSalary: this.profile.netSalary + this.profile.benefits,
      taxRate: this.profile.taxRate,
      taxAmount: this.profile.taxRate * this.profile.netSalary,
      overtimeHours: this.form.get('overtimehours')?.value,
      benefits: this.profile.benefits,
      userEmail: this.user.email,
    }
    if (this.form.valid) {
      this.service.registerPaySlip(data).subscribe((res: any) => {
        console.log(res);
        // check if the response has a key called response
        if (res.status === 'OK' && res.data.hasOwnProperty('response')) {
          this.dataEvent.emit(true);
          Swal.fire({
            title: 'Success',
            text: 'Payslip registered successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(() => {
            this.form.reset();
            this.dataEvent.emit(false);
          })
          }
        else {
          Swal.fire({
            title: 'Error',
            text: 'Payslip not registered',
            icon: 'error',
            confirmButtonText: 'Ok'
          }).then(() => {
            this.dataEvent.emit(false);
          })
        }
      })
    }
  }


}
