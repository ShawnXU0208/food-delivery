import { TestBed } from '@angular/core/testing';

import { PageLayoutService } from './page-layout.service';

describe('PageLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageLayoutService = TestBed.get(PageLayoutService);
    expect(service).toBeTruthy();
  });
});
