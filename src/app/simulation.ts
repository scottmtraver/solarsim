export interface SystemConfig {
    // watts of input to the solar panel
    solarWatts: number;
    // gallons in the solar panel
    panelVolume: number;

    // efficiancy of the panel as a percentage
    panelEfficiancy?: number;

    // gallons in the storage tank
    tankVolume: number;

    // toggle pump on and/or off
    pumpIsOn: boolean;
  }

export interface SimulationState {
    // current temp of fluid in system
    temp: number;

    // offset of time in hours (starting at 0)
    hour: number;
} 

export interface Simulation {
    config: SystemConfig;

    states: Array<SimulationState>;
}