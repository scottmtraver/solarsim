import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';
import { ThermodynamicsService } from '../thermodynamics.service';

@Component({
  selector: 'app-simulation-display',
  templateUrl: './simulation-display.component.html',
  styleUrls: ['./simulation-display.component.less'],
})
export class SimulationDisplayComponent implements OnInit {
  simulation: Simulation;

  constructor(private thermodynamicsService: ThermodynamicsService) {}

  ngOnInit(): void {
    this.getSimulation();
  }

  getSimulation(): void {
    this.thermodynamicsService
      .getSimulation()
      .subscribe((simulation) => (this.simulation = simulation));
  }
}
