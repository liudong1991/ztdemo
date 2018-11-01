import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossSectionDiagramComponent } from './cross-section-diagram.component';

describe('CrossSectionDiagramComponent', () => {
  let component: CrossSectionDiagramComponent;
  let fixture: ComponentFixture<CrossSectionDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossSectionDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossSectionDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
