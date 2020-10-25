import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';
import { ThermodynamicsService } from '../thermodynamics.service';

@Component({
  selector: 'app-simulation-controls',
  templateUrl: './simulation-controls.component.html',
  styleUrls: ['./simulation-controls.component.less']
})
export class SimulationControlsComponent implements OnInit {

    simulation: Simulation;
    finalResult: number

  constructor(
    private thermodynamicsService: ThermodynamicsService,
  ) {
  }

  ngOnInit(): void {
      this.getSimulation();
  }

  getSimulation(): void {
    this.thermodynamicsService.getSimulation()
    .subscribe(simulation => this.simulation = simulation);
  }

  getEfficiency(): void {
      const eff = this.thermodynamicsService.getEfficiency(this.simulation)
      this.simulation.panelEfficiancy = eff;
      this.finalResult = eff;
  }
}
