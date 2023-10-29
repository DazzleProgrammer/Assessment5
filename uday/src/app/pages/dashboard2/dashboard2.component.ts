import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var Chart: any;
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
})
export class Dashboard2Component implements AfterViewInit {
  @ViewChild('myDoughnutChart') private chartRef!: ElementRef;
  ngAfterViewInit() {
    const chartData = {
      labels: ['Series B', 'Series A'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [100, 50, 70],
          backgroundColor: [
            'rgb(112, 31, 224)',
            'rgb(255, 156, 222)',
            'rgb(99, 172, 255)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    const chartConfig = {
      type: 'doughnut',
      data: chartData,
    };

    const ctx = this.chartRef.nativeElement.getContext('2d');
    new Chart(ctx, chartConfig);
  }
}
