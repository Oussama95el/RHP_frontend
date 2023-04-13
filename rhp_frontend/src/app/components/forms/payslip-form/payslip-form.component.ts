import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payslip-form',
  templateUrl: './payslip-form.component.html',
})
export class PayslipFormComponent {

  @Input() profile: any;
  @Input() user: any;

  paySlipForm:  FormGroup;
  constructor() {
    this.paySlipForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      netSalary: new FormControl('', [Validators.required]),
      deductions: new FormControl('', [Validators.required]),
      grossSalary: new FormControl('', [Validators.required]),
      employee: new FormControl('', [Validators.required]),
      taxRate: new FormControl('', [Validators.required]),
      taxAmount: new FormControl('', [Validators.required]),
      overtimehours: new FormControl('', [Validators.required]),
      benefits: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.paySlipForm);
  }
}
