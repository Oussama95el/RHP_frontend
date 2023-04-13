import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-agent',
  templateUrl: './sidebar-agent.component.html',
})
export class SidebarAgentComponent {

  collapseShow = "hidden";

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
