import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-employee',
  templateUrl: './sidebar-employee.component.html',
  styles : []
})
export class SidebarEmployeeComponent {


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
