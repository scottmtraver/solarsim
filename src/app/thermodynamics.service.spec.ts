import { TestBed } from '@angular/core/testing';

import { ThermodynamicsService } from './thermodynamics.service';
import { SystemConfig, Simulation } from './simulation';
import { SystemConfigBuilder } from './builder/systemConfigBuilder';
import { SimulationStateBuilder } from './builder/simulationStateBuilder';
import * as _ from 'lodash';

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
    const systemConfig = new SystemConfigBuilder().withSolarWatts((2 * 250) * .96)
        .withPanelVolume(2)
        .build();

    const startState = new SimulationStateBuilder().withHour(0).withTemp(60).build();
    const endState = new SimulationStateBuilder().withHour(1).withTemp(106).build();
    const sut = {
        config: systemConfig,
        states: [startState, endState]
    } as Simulation;

    // results were rounded up from .468
    const expectedEfficiency = .47;

    // act
    const result = Number(service.getEfficiency(sut).toFixed(2));

    // verify
    expect(result).toEqual(expectedEfficiency);

  });

  it('Should Tick Simulation', () => {
    expect(service).toBeTruthy();

    // assert
    const systemConfig = new SystemConfigBuilder().withSolarWatts((2 * 250) * .96)
        .withPanelVolume(2)
        .withPanelEfficiency(.47)
        .build();

    const startState = new SimulationStateBuilder().withHour(0).withTemp(60).build();
    const sut = {
        config: systemConfig,
        states: [startState]
    } as Simulation;

    // results were rounded up from .468
    const expectedEndTemp = 106;

    // act
    service.tickSimulation(sut);
    const result = Number(_.last(sut.states).temp.toFixed(0));

    // verify
    expect(result).toEqual(expectedEndTemp);

  });
});
