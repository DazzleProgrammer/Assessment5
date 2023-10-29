import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ToggleServiceService } from 'src/app/services/toggle-service.service';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent {

  constructor(private abc: ToggleServiceService) { }

  changeToggle() {
    this.abc.toggleChange();
  }
}
