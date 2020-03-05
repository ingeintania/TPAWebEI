import { TestBed } from '@angular/core/testing';

import { HotelfacilityService } from './hotelfacility.service';

describe('HotelfacilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelfacilityService = TestBed.get(HotelfacilityService);
    expect(service).toBeTruthy();
  });
});
