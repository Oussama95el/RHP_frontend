import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-absence-chart',
  templateUrl: './absence-chart.component.html',
  styleUrls: ['./absence-chart.component.css']
})
export class AbsenceChartComponent {


  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Leave Requests',
            backgroundColor: '#60A5FA',
            data: [10, 20, 30, 40, 50, 60, 70]
          },
          {
            label: 'Absence',
            backgroundColor: '#F87171',
            data: [20, 30, 40, 50, 60, 70, 80]
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
