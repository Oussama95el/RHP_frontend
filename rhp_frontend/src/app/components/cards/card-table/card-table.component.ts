import { Component, OnInit, Input } from "@angular/core";
import {AdminService} from "../../../services/admin.service";
import {map} from "rxjs";
import {UserInterface} from "../../../Interfaces/User.interface";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
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
