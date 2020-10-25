import { Component, OnInit } from '@angular/core';
import { SystemConfig } from '../simulation';
import { ThermodynamicsService } from '../thermodynamics.service';

@Component({
  selector: 'app-simulation-controls',
  templateUrl: './simulation-controls.component.html',
  styleUrls: ['./simulation-controls.component.less']
})
export class SimulationControlsComponent implements OnInit {

    system: SystemConfig;

  constructor(
    private thermodynamicsService: ThermodynamicsService,
  ) {
  }

  ngOnInit(): void {
      this.getSimulation();
  }

  getSimulation(): void {
    this.thermodynamicsService.getSimulation()
    .subscribe(simulation => this.system = simulation.config);
  }

  getEfficiency(): void {
    //   const eff = this.thermodynamicsService.getEfficiency(this.system)
    //   this.simulation.panelEfficiancy = eff;
    //   this.finalResult = eff;
  }
}
