import { SystemConfig } from '../simulation';

export class SystemConfigBuilder {
    private config: SystemConfig;

    constructor() {
        this.config = {} as SystemConfig;
    }

    withSolarWatts(override: any): SystemConfigBuilder {
        this.config.solarWatts = override;
        return this;
    }
    withPanelVolume(override: any): SystemConfigBuilder {
        this.config.panelVolume = override;
        return this;
    }
    withPanelEfficiency(override: any): SystemConfigBuilder {
        this.config.panelEfficiancy = override;
        return this;
    }

    build(): SystemConfig {
        return this.config;
    }
}