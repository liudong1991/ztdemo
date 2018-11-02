import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleSensorListComponent } from './hole-sensor-list.component';

describe('HoleSensorListComponent', () => {
  let component: HoleSensorListComponent;
  let fixture: ComponentFixture<HoleSensorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleSensorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleSensorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
