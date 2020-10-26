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
    running: boolean;
    tick: any; // timer ID

    private interval = 1000; // simulation ms

  constructor(
    private thermodynamicsService: ThermodynamicsService,
  ) {
  }

  ngOnInit(): void {
      this.getSimulation();
      this.running = false;
  }

  getSimulation(): void {
    this.thermodynamicsService.getSimulation()
    .subscribe(simulation => this.simulation = simulation);
  }

  getEfficiency(): void {
    //   const eff = this.thermodynamicsService.getEfficiency(this.system)
    //   this.simulation.panelEfficiancy = eff;
    //   this.finalResult = eff;
  }

  tickSimulation(): void {
      this.thermodynamicsService.tickSimulation(this.simulation);
  }

  toggleSimulation(): void {
      this.running = !this.running;
      if (this.running) {
        this.tick = setInterval(() => {
            this.tickSimulation();
        }, this.interval);
      } else {
          clearInterval(this.tick);
      }
  }

  resetSimulation(): void {
      window.location.reload();
  }
}
