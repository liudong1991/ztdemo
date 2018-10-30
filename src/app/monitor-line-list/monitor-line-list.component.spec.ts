import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorLineListComponent } from './monitor-line-list.component';

describe('MonitorLineListComponent', () => {
  let component: MonitorLineListComponent;
  let fixture: ComponentFixture<MonitorLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorLineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
