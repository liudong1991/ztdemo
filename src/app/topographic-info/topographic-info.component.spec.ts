import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopographicInfoComponent } from './topographic-info.component';

describe('TopographicInfoComponent', () => {
  let component: TopographicInfoComponent;
  let fixture: ComponentFixture<TopographicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopographicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopographicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
