import { TestBed } from '@angular/core/testing';

import { OrganizationUnitsService } from './organization-units.service';

describe('OrganizationUnitsService', () => {
  let service: OrganizationUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
