import {Component} from '@angular/core';
import Chart from "chart.js/auto";
import {StatisticsService} from "../../../services/statistics.service";

@Component({
  selector: 'app-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.css']
})
export class UsersChartComponent {

  public chart: any;

  users: any;
  managers: any;
  agents: any;
  employees: any;

  constructor(private service: StatisticsService) {

  }

  ngOnInit(): void {
    this.service.getAdminStatistics().subscribe(data => {
      this.users = data;
      this.managers = this.users.data.managers;
      this.agents = this.users.data.agents;
      this.employees = this.users.data.employees;

      console.log(this.employees);
      this.createChart();

    });

  }

  createChart() {

    this.chart = new Chart("doughnut", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Managers', 'Agents', 'Employees'],
        datasets: [{
          label: 'My First Dataset',
          data: [this.managers, this.agents, this.employees],
          backgroundColor: [
            '#056774',
            '#7fffd4',
            '#1eb3c7',

          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Users Chart',
            color: 'primary',
            font: {
              family: 'Arial',
              size: 20,
            }
          }
        }
      }

    });
  }

}
