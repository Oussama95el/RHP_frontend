import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {ProfileInterface} from "../../../Interfaces/Profile.interface";
import {UserInterface} from "../../../Interfaces/User.interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [

  ],
})
export class ProfileComponent implements OnInit {

  profile!: ProfileInterface;

  user!: UserInterface;
  constructor(private service: EmployeeService) {

  }

  ngOnInit(): void {
    this.service.getEmployeeProfile().pipe().subscribe(
      (data: any) => {
        this.profile = data.data.profile;
        this.user = data.data.user;
      }
    );

  }

  handleChildData(data: ProfileInterface) {
    this.profile = data;
    console.log(this.profile);
  }
}
