import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementDiagramComponent } from './arrangement-diagram.component';

describe('ArrangementDiagramComponent', () => {
  let component: ArrangementDiagramComponent;
  let fixture: ComponentFixture<ArrangementDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangementDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangementDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
