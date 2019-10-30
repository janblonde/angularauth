import { TestBed } from '@angular/core/testing';

import { RapportenService } from './rapporten.service';

describe('RapportenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapportenService = TestBed.get(RapportenService);
    expect(service).toBeTruthy();
  });
});
