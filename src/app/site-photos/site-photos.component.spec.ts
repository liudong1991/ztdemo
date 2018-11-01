import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePhotosComponent } from './site-photos.component';

describe('SitePhotosComponent', () => {
  let component: SitePhotosComponent;
  let fixture: ComponentFixture<SitePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
