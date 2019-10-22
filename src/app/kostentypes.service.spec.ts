import { TestBed } from '@angular/core/testing';

import { KostentypesService } from './kostentypes.service';

describe('KostentypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KostentypesService = TestBed.get(KostentypesService);
    expect(service).toBeTruthy();
  });
});
