import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepHoleSensorCurveComponent } from './deep-hole-sensor-curve.component';

describe('DeepHoleSensorCurveComponent', () => {
  let component: DeepHoleSensorCurveComponent;
  let fixture: ComponentFixture<DeepHoleSensorCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepHoleSensorCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepHoleSensorCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
