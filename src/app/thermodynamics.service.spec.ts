import { TestBed } from '@angular/core/testing';

import { ThermodynamicsService } from './thermodynamics.service';
import { Simulation } from './simulation';

describe('ThermodynamicsService', () => {
  let service: ThermodynamicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThermodynamicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Demo Simulation 1', () => {
    expect(service).toBeTruthy();

    // assert
    const sut = {
        solarWatts: ((2 * 250) * .96),
        panelVolume: 2,
        duration: 1,
        startingTemp: 60,
        endingTemp: 106
    } as Simulation;
    // results were rounded up from .468
    const expectedEfficiency = .47;

    // act
    const result = Number(service.getEfficiency(sut).toFixed(2));

    // verify
    expect(result).toEqual(expectedEfficiency);

  });
});
