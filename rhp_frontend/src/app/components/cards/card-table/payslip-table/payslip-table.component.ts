import {Component, Input} from '@angular/core';
import {UserInterface} from "../../../../Interfaces/User.interface";
import {AdminService} from "../../../../services/admin.service";
import {map} from "rxjs";

@Component({
  selector: 'app-payslip-table',
  templateUrl: './payslip-table.component.html',

})
export class PayslipTableComponent {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  users: UserInterface[] = [];



  constructor( private service: AdminService) {}

  ngOnInit(): void {
    this.service.getAllUsers().pipe(
      map((data: any) => {
          this.users = data;
          console.log(this.users);
        }
      )
    ).subscribe();
  }
}
