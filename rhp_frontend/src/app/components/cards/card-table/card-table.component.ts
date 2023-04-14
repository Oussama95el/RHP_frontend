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

  currentPage: number = 1;
  pageSize: number = 5;



  constructor( private service: AdminService) {}

  ngOnInit(): void {
    this.service.getAllUsers().pipe(
      map((data: any) => {
        this.users = data;
      }
    )
    ).subscribe();
  }

  getPaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.users.slice(startIndex, endIndex);
  }
}
