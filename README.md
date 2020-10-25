# Solarsim

This project is a sample simulation of heat transfer from a solar panel to a storage tank.

## Assumptions

We are using water as a medium of both solar collection and transfer to the storage/holding tank.
Any heat loss in the transfer process (pipes) is disregarded at the moment simulating a lossless transfer as we focus only on the use of the storage tank for incrased volume for the solar collector.

I am also making the assumption that the pump, pipes, and tank insulation are lossless meaning the tank is strictly an increase in fluid volume for the system when the pump is in the ON position - it's volume is added to the panel volume seamlessly. in the OFF position only the panel volume is used in calculations

## Angles of What this program is trying to describe about this system:
We could focus on panel efficiency
We could focus on temperature throught simulation duration (ticks in hours)
We could test different fluids
We could consider certain kinds of lossy tanks/transfer pipes and add those into the system equations and monitoring
We could focus on external factors such as UV/Watts for inbound energy throughout a 'typical' (or aytypical) day to simulate or report on the system effects

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
