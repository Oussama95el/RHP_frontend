import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidebar-agent',
  templateUrl: './sidebar-agent.component.html',
})
export class SidebarAgentComponent {

  collapseShow = "hidden";

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
    localStorage.clear();
    window.location.href = "/";
  }

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
