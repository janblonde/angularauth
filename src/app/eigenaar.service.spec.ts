import { TestBed } from '@angular/core/testing';

import { EigenaarService } from './eigenaar.service';

describe('EigenaarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EigenaarService = TestBed.get(EigenaarService);
    expect(service).toBeTruthy();
  });
});
