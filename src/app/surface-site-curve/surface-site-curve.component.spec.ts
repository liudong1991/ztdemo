import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceSiteCurveComponent } from './surface-site-curve.component';

describe('SurfaceSiteCurveComponent', () => {
  let component: SurfaceSiteCurveComponent;
  let fixture: ComponentFixture<SurfaceSiteCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceSiteCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceSiteCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
