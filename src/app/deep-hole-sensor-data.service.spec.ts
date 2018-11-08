import { TestBed } from '@angular/core/testing';

import { DeepHoleSensorDataService } from './deep-hole-sensor-data.service';

describe('DeepHoleSensorDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeepHoleSensorDataService = TestBed.get(DeepHoleSensorDataService);
    expect(service).toBeTruthy();
  });
});
