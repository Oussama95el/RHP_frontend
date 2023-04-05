import { Component, OnInit } from "@angular/core";
import {StatisticsService} from "../../../services/statistics.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  constructor(private service: StatisticsService) {}

  statics: any;

  ngOnInit(): void {
    this.service.getAdminStatistics().subscribe(
      (res: any) => {
        this.statics = res;
      }
    )
  }

  // method that takes users int and type int and return the percentage of type users return as a string
  getPercentage(users: number, type: number) {
    // calculate the percentage
    let percentage = (type / users) * 100;
    // show one number after the decimal point
    percentage = Math.round(percentage * 10) / 10;
    return percentage.toString();
  }

}
