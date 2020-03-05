import { TestBed } from '@angular/core/testing';

import { EntertainmentService } from './entertainment.service';

describe('EntertainmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntertainmentService = TestBed.get(EntertainmentService);
    expect(service).toBeTruthy();
  });
});
