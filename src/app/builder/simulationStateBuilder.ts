import { SimulationState } from '../simulation';

export class SimulationStateBuilder {
    private state: SimulationState;

    constructor() {
        this.state = {} as SimulationState;
    }

    withTemp(override: any): SimulationStateBuilder {
        this.state.temp = override;
        return this;
    }

    withHour(override: any): SimulationStateBuilder {
        this.state.hour = override;
        return this;
    }

    build(): SimulationState {
        return this.state;
    }
}