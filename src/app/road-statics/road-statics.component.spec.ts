import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadStaticsComponent } from './road-statics.component';

describe('RoadStaticsComponent', () => {
  let component: RoadStaticsComponent;
  let fixture: ComponentFixture<RoadStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
