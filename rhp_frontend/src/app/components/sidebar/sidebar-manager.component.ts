import { Component, OnInit } from "@angular/core";
import {ManagerService} from "../../services/manager.service";
import * as FileSaver from 'file-saver';
@Component({
  selector: "app-sidebar-manager",
  templateUrl: "./sidebar-manager.component.html",
})
export class SidebarManagerComponent implements OnInit {
  collapseShow = "hidden";
  constructor(private service: ManagerService) {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  generatePdf() {
    this.service.getPdf().subscribe((res) => {
console.log(res);
      FileSaver.saveAs(res, '.pdf');
    }
    );
  }
}
