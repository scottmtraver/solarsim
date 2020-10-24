import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class ThermodynamicsService {

    defaultSimulation = {
        solarWatts: 50,
        panelVolume: 50,
        startingTemp: 50,
        panelEfficiancy: 0,
        endingTemp: 100
    } as Simulation;

  constructor() { }

    /** GET heroes from the server */
    getSimulation(): Observable<Simulation> {
        return of(this.defaultSimulation);
      }

    getEfficiency(simulation: Simulation) {

        return simulation.solarWatts
    }
}
