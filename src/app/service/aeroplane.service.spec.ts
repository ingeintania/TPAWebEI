import { TestBed } from '@angular/core/testing';

import { AeroplaneService } from './aeroplane.service';

describe('AeroplaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AeroplaneService = TestBed.get(AeroplaneService);
    expect(service).toBeTruthy();
  });
});
