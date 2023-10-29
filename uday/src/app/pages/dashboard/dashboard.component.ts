import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  styles: any = {
    display: 'none',
  };

  price() {
    this.router.navigate(['/price']);
  }

  open() {
    if (this.styles.display === 'block') {
      this.styles.display = 'none';
    } else {
      this.styles.display = 'block';
    }
  }
}
