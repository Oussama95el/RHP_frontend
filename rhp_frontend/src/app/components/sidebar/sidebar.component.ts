import { Component, OnInit } from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  logout() {
    this.authService.logout();
    localStorage.clear();
    window.location.href = "/";
  }
}
