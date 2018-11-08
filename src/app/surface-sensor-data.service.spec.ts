import { TestBed } from '@angular/core/testing';

import { SurfaceSensorDataService } from './surface-sensor-data.service';

describe('SurfaceSensorDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurfaceSensorDataService = TestBed.get(SurfaceSensorDataService);
    expect(service).toBeTruthy();
  });
});
