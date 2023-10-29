import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinecolumnComponent } from './linecolumn.component';

describe('LinecolumnComponent', () => {
  let component: LinecolumnComponent;
  let fixture: ComponentFixture<LinecolumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinecolumnComponent]
    });
    fixture = TestBed.createComponent(LinecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
