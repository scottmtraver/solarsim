import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationDisplayComponent } from './simulation-display.component';

describe('SimulationDisplayComponent', () => {
  let component: SimulationDisplayComponent;
  let fixture: ComponentFixture<SimulationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
