import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceCurveComponent } from './surface-curve.component';

describe('SurfaceCurveComponent', () => {
  let component: SurfaceCurveComponent;
  let fixture: ComponentFixture<SurfaceCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
