import { TestBed } from '@angular/core/testing';

import { FormAlertsService } from './form-alerts.service';

describe('FormAlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormAlertsService = TestBed.get(FormAlertsService);
    expect(service).toBeTruthy();
  });
});
