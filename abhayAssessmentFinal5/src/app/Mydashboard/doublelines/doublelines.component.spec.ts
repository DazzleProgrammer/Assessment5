import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublelinesComponent } from './doublelines.component';

describe('DoublelinesComponent', () => {
  let component: DoublelinesComponent;
  let fixture: ComponentFixture<DoublelinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoublelinesComponent]
    });
    fixture = TestBed.createComponent(DoublelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
