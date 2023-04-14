import {Component, Input} from '@angular/core';
import {UserInterface} from "../../../../Interfaces/User.interface";
import {AdminService} from "../../../../services/admin.service";
import {map} from "rxjs";
import {EmployeeService} from "../../../../services/employee.service";

@Component({
  selector: 'app-payslip-table',
  templateUrl: './payslip-table.component.html',

})
export class PayslipTableComponent {

  @Input() payslips: any = [];
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  users: UserInterface[] = [];



  constructor( private service: AdminService, private employeeService: EmployeeService ) {}

  ngOnInit(): void {
    this.service.getAllUsers().pipe(
      map((data: any) => {
          this.users = data;
        }
      )
    ).subscribe();
  }

  formatDate(date: any) {
    // format date to dd/mm/yyyy
    const d = new Date(date);
    let month = '' + (d.getMonth());
    let day = '' + d.getDate();
    const year = d.getFullYear();
    return [day, month, year].join('/');
  }

  download(item: any) {
    this.employeeService.downloadPaySlip(item.id).subscribe((data: any) => {
      const blob = new Blob([data], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
