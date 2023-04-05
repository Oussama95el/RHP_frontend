import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-manager",
  templateUrl: "./sidebar-manager.component.html",
})
export class SidebarManagerComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
}
