import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidebar-employee',
  templateUrl: './sidebar-employee.component.html',
  styles : []
})
export class SidebarEmployeeComponent {


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
