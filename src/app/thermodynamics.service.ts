import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SystemConfig, SimulationState, Simulation } from './simulation';
import { EquationLibrary } from './equationLibrary';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ThermodynamicsService {

    static BTU_WATT_HOUR = 3.41;
    static GAL_CUB_FT = 0.1336;
    static CUB_FT_LBS = 62.42;

    // NOTE: This is where we could use a substance other than water
    static SUBSTANCE_SPECIFIC_HEAT = 1;

    // initial state
    private simulation = {
        config: {
            solarWatts: 480,
            panelVolume: 2,
            panelEfficiancy: .47,
            tankVolume: 2,
            pumpIsOn: false
        } as SystemConfig,
        states: [{
            hour: 0,
            temp: 60
        }]
    } as Simulation;

  constructor() { }

    /** GET heroes from the server */
    getSimulation(): Observable<Simulation> {
        return of(this.simulation);
      }

    getEfficiency(simulation: Simulation): number {
        // validate required fields a complete system and at least 2 states
        const energyIn = EquationLibrary.convertHeatPowerToHeatEnergy(simulation.config.solarWatts,
            _.last(simulation.states).hour);
        const energyOut = EquationLibrary.calculateEnergyDifference(
            EquationLibrary.convertGallonsToPounds(simulation.config.panelVolume),
            (_.last(simulation.states).temp - _.first(simulation.states).temp));
        return energyOut / energyIn;
    }

    // adds a state to the end of the simulation based on the config and previous state
    tickSimulation(simulation: Simulation): void {
        // validate requirements (watts, efficiency, volume (pump status), at least 1 state)
        const latestState = _.last(simulation.states);
        let totalVolume = simulation.config.panelVolume;
        if (simulation.config.pumpIsOn) {
            totalVolume += simulation.config.tankVolume;
        }
        const newState = {
            hour: latestState.hour + 1,
            temp: latestState.temp + EquationLibrary.calculateTempChange(
                EquationLibrary.convertHeatPowerToHeatEnergy(simulation.config.solarWatts * simulation.config.panelEfficiancy, 1),
                EquationLibrary.convertGallonsToPounds(totalVolume)
            )
        } as SimulationState;
        console.log(newState)
        simulation.states.push(newState);
    }
}
