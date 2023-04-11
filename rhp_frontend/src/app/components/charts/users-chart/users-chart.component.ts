import {Component} from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.css']
})
export class UsersChartComponent {

  public chart: any;
  public raw: any;

  constructor() {

  }

  ngOnInit(): void {
    this.createChart();
    this.createRawChart();
  }
  createChart(){

    this.chart = new Chart("doughnut", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Managers', 'Agents','Employees' ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240, 100],
          backgroundColor: [
            'red',
            'pink',
            'green',

          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio:2.5,
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

  createRawChart(){

  }
}
