import { Component } from '@angular/core';
import {ManagerService} from "../../../services/manager.service";

@Component({
  selector: 'app-leave-request',
  templateUrl: './manager-leave-request.component.html',
})
export class ManagerLeaveRequestComponent {

  leaveRequests: any = [];
    constructor(private service: ManagerService) { }

    ngOnInit(): void {
      this.getAllLeaveRequests();
    }

  getAllLeaveRequests() {
    this.service.getAllLeaveRequests().subscribe((data: any) => {
      this.leaveRequests = data.data.leaveRequests;
      this.sortLeaveRequests();
    });
  }

  approveLeaveRequest(item: any) {
      this.service.editLeaveRequest(item.id, 'APPROVED').subscribe((data: any) => {
        this.leaveRequests = data.data.leaveRequests;
        this.sortLeaveRequests();
      });
  }

  rejectLeaveRequest(item: any) {
      this.service.editLeaveRequest(item.id, 'REJECTED').subscribe((data: any) => {
        this.leaveRequests = data.data.leaveRequests;
        this.sortLeaveRequests();
      });
  }

  // Sort the leave requests by status
  sortLeaveRequests() {
    this.leaveRequests.sort((a: any, b: any) => {
      this.leaveRequests.sort((a: any, b: any) => {
        if (a.status === 'APPROVED') {
          return -1;
        }
        if (a.status === 'REJECTED') {
          return 1;
        }
        if (a.status === 'PENDING') {
          return 0;
        }
        return 0;
      });
    });
  }
}
