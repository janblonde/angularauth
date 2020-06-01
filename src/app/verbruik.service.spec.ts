import { TestBed } from '@angular/core/testing';

import { VerbruikService } from './verbruik.service';

describe('VerbruikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerbruikService = TestBed.get(VerbruikService);
    expect(service).toBeTruthy();
  });
});
