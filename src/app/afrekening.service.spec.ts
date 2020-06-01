import { TestBed } from '@angular/core/testing';

import { AfrekeningService } from './afrekening.service';

describe('AfrekeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfrekeningService = TestBed.get(AfrekeningService);
    expect(service).toBeTruthy();
  });
});
