import { TestBed } from '@angular/core/testing';

import { FactuurService } from './factuur.service';

describe('FactuurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactuurService = TestBed.get(FactuurService);
    expect(service).toBeTruthy();
  });
});
