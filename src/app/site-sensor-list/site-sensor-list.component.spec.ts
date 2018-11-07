import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSensorListComponent } from './site-sensor-list.component';

describe('SiteSensorListComponent', () => {
  let component: SiteSensorListComponent;
  let fixture: ComponentFixture<SiteSensorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSensorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSensorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
