import { TestBed } from '@angular/core/testing';

import { ThermodynamicsService } from './thermodynamics.service';

describe('ThermodynamicsService', () => {
  let service: ThermodynamicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThermodynamicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
