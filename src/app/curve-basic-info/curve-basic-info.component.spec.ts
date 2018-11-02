import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveBasicInfoComponent } from './curve-basic-info.component';

describe('CurveBasicInfoComponent', () => {
  let component: CurveBasicInfoComponent;
  let fixture: ComponentFixture<CurveBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
