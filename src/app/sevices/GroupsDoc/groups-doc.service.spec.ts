import { TestBed } from '@angular/core/testing';

import { GroupsDocService } from './groups-doc.service';

describe('GroupsDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsDocService = TestBed.get(GroupsDocService);
    expect(service).toBeTruthy();
  });
});
