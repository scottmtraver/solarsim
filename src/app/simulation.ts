export interface Simulation {
    // watts of input to the solar panel
    solarWatts: number;
    // gallons in the solar panel
    panelVolume: number;
    // // gallons in the storage tank
    // tankVolume: number;
    // starting volume of water
    startingTemp: number;
    // duration of the simulation in hours
    duration: number;
    // efficiancy of the panel as a percentage
    panelEfficiancy: number;

    // ending volume of water
    endingTemp: number;
  }