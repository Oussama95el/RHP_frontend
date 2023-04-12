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
            backgroundColor: '#7fffd4',
            data: [12, 20, 24, 40, 40, 10, 70]
          },
          {
            label: 'Absence',
            backgroundColor: '#1eb3c7',
            data: [20, 60, 40, 35, 60, 40, 15]
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'black',
              font: {
                size: 14
              },
              padding: 20
            },
          },
          title: {
            display: true,
            text: 'Absence | Leave Request Chart',
            color: 'black',
            font: {
              size: 20
            },
            align: 'center'
          }
        }

      },


    });
  }
}
