import {Component} from '@angular/core';
import {AgentService} from "../../../services/agent.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserInterface} from "../../../Interfaces/User.interface";

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
})
export class PayslipAgentComponent {

  employees: any = [];
  users: UserInterface[] = [];
  profile: any;
  searchText: any;
  toggleForm: boolean = false;
  selectedUser: any;

  constructor(private service: AgentService, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.service.getEmployees().pipe().subscribe((data: any) => {
        this.employees = data;
        for (let i = 0; i < this.employees.length; i++) {
          this.users.push(this.employees[i].user);
        }
      }
    );
  }


  creatPaySlip(user: any) {
    this.toggleForm = true;
    this.selectedUser = user;
    this.service.getEmployee(user.id).pipe().subscribe((data: any) => {
        if (data) {
          this.profile = data;
        }
      }
    );
  }

  searchUser() {
    if (this.searchText == '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter((res: any) => {
        return res.firstName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      });
      if (this.users.length == 0) {
        this.snackBar.open('No user found', 'Close', {
          duration: 2000,
        });
      }
    }
  }

  collapseForm(data: boolean) {
    this.toggleForm = data;
  }

}
