import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class ThermodynamicsService {

    static BTU_WATT_HOUR = 3.41;
    static GAL_CUB_FT = 0.1336;
    static CUB_FT_LBS = 62.42;

    // NOTE: This is where we could use a substance other than water
    static SUBSTANCE_SPECIFIC_HEAT = 1;

    defaultSimulation = {
        solarWatts: 480,
        panelVolume: 2,
        startingTemp: 60,
        panelEfficiancy: 0,
        endingTemp: 106,
        duration: 1
    } as Simulation;

  constructor() { }

    /** GET heroes from the server */
    getSimulation(): Observable<Simulation> {
        return of(this.defaultSimulation);
      }

    getEfficiency(simulation: Simulation) {
        const energyIn = this.convertHeatPowerToHeatEnergy(simulation.solarWatts, simulation.duration);
        const energyOut = this.calculateEnergyDifference(
            this.convertGallonsToPounds(simulation.panelVolume),

            (simulation.endingTemp - simulation.startingTemp));
        return energyOut / energyIn;
    }

    // UTILITIES

    // return BTU
    private convertHeatPowerToHeatEnergy(watts: number, duration: number): number {
        return (watts * duration) * ThermodynamicsService.BTU_WATT_HOUR;
    }

    // return cubic feet (volume)
    private convertGallonsToCubicFeet(gallons: number): number {
        return gallons * ThermodynamicsService.GAL_CUB_FT;
    }

    // return pounds (mass)
    private convertVolumeToPounds(cubicFeet: number): number {
        return cubicFeet * ThermodynamicsService.CUB_FT_LBS;
    }

    private convertGallonsToPounds(gallons: number): number {
        return this.convertVolumeToPounds(this.convertGallonsToCubicFeet(gallons));
    }

    // mass in lbs, temp delta in degrees F - returns BTU for substance
    private calculateEnergyDifference(mass: number, tempDelta: number): number {
        return mass * ThermodynamicsService.SUBSTANCE_SPECIFIC_HEAT * tempDelta;
    }
}
