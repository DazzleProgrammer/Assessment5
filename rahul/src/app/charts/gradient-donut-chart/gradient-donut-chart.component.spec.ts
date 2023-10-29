import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientDonutChartComponent } from './gradient-donut-chart.component';

describe('GradientDonutChartComponent', () => {
  let component: GradientDonutChartComponent;
  let fixture: ComponentFixture<GradientDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradientDonutChartComponent]
    });
    fixture = TestBed.createComponent(GradientDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
