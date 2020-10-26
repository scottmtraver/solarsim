# Solarsim

This project is a sample simulation of heat transfer from a solar panel to a storage tank.

[Live Demo](https://scottmtraver.github.io/solarsim/)

The controls for the system are:
- Solar Energy (incoming energy in watts) 
- Heat Exchange Panel Size (in gallons of water contained)
- Tank Size (in gallons of water)
- Heat Exchange Panel Efficiency (as a percentage)
- Pump On/off

The pump system is naive. When in the on position the total volume of the system includes both panel volume and tank volume. There is no temperature degredation or loss in insulation and the pump circulates endlessly and instantly.
When in the off position only the heat exchange panel volume of water is used.

The current temperature is the last line of the simulation results.

There are no boundaries to simulation (related to maximum temperature of water or any other component).

Running the simulation takes the current system inputs and calculates a new temp simulating 1 hour of passing time each second. You can also manually advance the simulation.

## Uncompleted Work Ideas
- Stubbed out method for using a medium other than water
- When you turn the pump on the two bodies of fluid should calculate a new temperature as they merge
- I wanted to put a UV -> Wattage simulation in to simulate a typical sun path throughout a day (or randomize)
- Fluid should cool off at a given rate
- Starting temp should be selectable
- D3 line chart of temp would be easy
- Information can be added directly on the graphic (demonstrated by pump status)

## Assumptions

We are using water as a medium of both solar collection and transfer to the storage/holding tank.
Any heat loss in the transfer process (pipes) is disregarded at the moment simulating a lossless transfer as we focus only on the use of the storage tank for incrased volume for the solar collector.

I am also making the assumption that the pump, pipes, and tank insulation are lossless meaning the tank is strictly an increase in fluid volume for the system when the pump is in the ON position - it's volume is added to the panel volume seamlessly. in the OFF position only the panel volume is used in calculations

## Angles of What this program is trying to describe about this system:
- We could focus on panel efficiency
- We could focus on temperature throught simulation duration (ticks in hours)
- We could test different fluids
- We could consider certain kinds of lossy tanks/transfer pipes and add those into the system equations and monitoring
- We could focus on external factors such as UV/Watts for inbound energy throughout a 'typical' (or aytypical) day to simulate or report on the system effects

## Resources

Equations adapted from [Solar Water Heater Efficiency Analysis](https://www.teachengineering.org/content/cub_/activities/cub_solarenergy/cub_solarenergy_lesson01_activity1_worksheet2_tedl_mhf.pdf)
(I think I found a mistake in the activity above it ended up not passing my tests but led me to further research)

https://bloglocation.com/art/water-heating-calculator-for-time-energy-power
Simple calculations

---
# Angular and Code Running

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Time
- Oct 23 initial research 30 min finding links
- Oct 24 angular setup and component architecture 1hr
- Oct 24 reviewing test case and finding additional calculations and scoping 1hr
- Oct 25 overhaul from efficiency to simulation test cases and modeling 1hr
- Oct 25 add styling, interactive controls, graphic demonstration, note code for improvement or SME to implement real formulas