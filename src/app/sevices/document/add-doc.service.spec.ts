import { TestBed } from '@angular/core/testing';

import { AddDocService } from './add-doc.service';

describe('AddDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDocService = TestBed.get(AddDocService);
    expect(service).toBeTruthy();
  });
});
