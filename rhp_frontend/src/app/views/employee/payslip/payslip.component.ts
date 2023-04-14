import { Component } from '@angular/core';
import {ProfileInterface} from "../../../Interfaces/Profile.interface";
import {UserInterface} from "../../../Interfaces/User.interface";
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
})
export class PayslipComponent {

  profile!: ProfileInterface;
  user!: UserInterface;

  payslips: any = [];


  constructor(private service: EmployeeService) {
  }


  ngOnInit(): void {
    this.service.getEmployeeProfile().subscribe((data: any) => {
      this.profile = data.data.profile;
      this.user = data.data.user;
      this.getAllPaySlips(this.profile.registrationNumber);
    });


  }

  getAllPaySlips(id:number) {
    this.service.getAllPaySlips(id).subscribe((data: any) => {
      this.payslips = data;
    });
  }
}
