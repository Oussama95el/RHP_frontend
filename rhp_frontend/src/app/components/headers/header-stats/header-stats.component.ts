import {Component, Input, OnInit} from "@angular/core";
import {StatisticsService} from "../../../services/statistics.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {

  @Input() display: boolean = true;
  constructor(private service: StatisticsService) {}

  statics: any;

  ngOnInit(): void {
    this.service.getAdminStatistics().subscribe(
      (res: any) => {
        this.statics = res;
      }
    )
  }

  // Calculate the percentage of the users of a specific type
  getPercentage(users: number, type: number) {
    // calculate the percentage
    let percentage = (type / users) * 100;
    // show one number after the decimal point
    percentage = Math.round(percentage * 10) / 10;
    return percentage.toString();
  }

}
