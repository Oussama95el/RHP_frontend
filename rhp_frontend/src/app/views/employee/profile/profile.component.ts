import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {ProfileInterface} from "../../../Interfaces/Profile.interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [

  ],
})
export class ProfileComponent implements OnInit {

  profile!: ProfileInterface;
  constructor(private service: EmployeeService) {

  }

  ngOnInit(): void {
    this.service.getEmployeeProfile().pipe().subscribe(
      (data: any) => {
        this.profile = data;
      }
    );

  }
}
