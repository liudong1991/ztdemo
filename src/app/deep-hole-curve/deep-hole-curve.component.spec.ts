import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepHoleCurveComponent } from './deep-hole-curve.component';

describe('DeepHoleCurveComponent', () => {
  let component: DeepHoleCurveComponent;
  let fixture: ComponentFixture<DeepHoleCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepHoleCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepHoleCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
