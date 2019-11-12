import { TestBed } from '@angular/core/testing';

import { RestuarantDetailService } from './restuarant-detail.service';

describe('RestuarantDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestuarantDetailService = TestBed.get(RestuarantDetailService);
    expect(service).toBeTruthy();
  });
});
