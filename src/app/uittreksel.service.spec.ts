import { TestBed } from '@angular/core/testing';

import { UittrekselService } from './uittreksel.service';

describe('UittrekselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UittrekselService = TestBed.get(UittrekselService);
    expect(service).toBeTruthy();
  });
});
