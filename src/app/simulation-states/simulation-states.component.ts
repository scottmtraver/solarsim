import { Component, OnInit } from '@angular/core';
import { Simulation, SimulationState } from '../simulation';
import { ThermodynamicsService } from '../thermodynamics.service';

@Component({
  selector: 'app-simulation-states',
  templateUrl: './simulation-states.component.html',
  styleUrls: ['./simulation-states.component.less']
})
export class SimulationStatesComponent implements OnInit {

    stateList: Array<SimulationState>;

    constructor(
      private thermodynamicsService: ThermodynamicsService,
    ) {
    }

    ngOnInit(): void {
        this.getSimulation();
    }

    getSimulation(): void {
      this.thermodynamicsService.getSimulation()
      .subscribe(simulation => this.stateList = simulation.states);
    }
}


/*
heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
*/