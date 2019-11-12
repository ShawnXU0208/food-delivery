import { TestBed } from '@angular/core/testing';

import { RestuarantsService } from './restuarants.service';

describe('RestuarantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestuarantsService = TestBed.get(RestuarantsService);
    expect(service).toBeTruthy();
  });
});
