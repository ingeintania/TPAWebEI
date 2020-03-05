import { TestBed } from '@angular/core/testing';

import { HoteldetailService } from './hoteldetail.service';

describe('HoteldetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoteldetailService = TestBed.get(HoteldetailService);
    expect(service).toBeTruthy();
  });
});
