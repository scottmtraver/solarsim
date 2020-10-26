import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStatesComponent } from './simulation-states.component';

describe('SimulationStatesComponent', () => {
  let component: SimulationStatesComponent;
  let fixture: ComponentFixture<SimulationStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
