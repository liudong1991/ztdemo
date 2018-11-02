import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleCurveComponent } from './hole-curve.component';

describe('HoleCurveComponent', () => {
  let component: HoleCurveComponent;
  let fixture: ComponentFixture<HoleCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
