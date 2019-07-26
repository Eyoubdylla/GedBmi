import { TestBed } from '@angular/core/testing';

import { SrvregistrationService } from './srvregistration.service';

describe('SrvregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvregistrationService = TestBed.get(SrvregistrationService);
    expect(service).toBeTruthy();
  });
});
