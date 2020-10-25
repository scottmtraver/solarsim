export class EquationLibrary {

    // Conversion Factors for Water
    static BTU_WATT_HOUR = 3.41;
    static GAL_CUB_FT = 0.1336;
    static CUB_FT_LBS = 62.42;

    // NOTE: This is where we could use a substance other than water
    static SUBSTANCE_SPECIFIC_HEAT = 1;

    // return BTU
    static convertHeatPowerToHeatEnergy(watts: number, duration: number): number {
        return (watts * duration) * this.BTU_WATT_HOUR;
    }

    // return cubic feet (volume)
    static convertGallonsToCubicFeet(gallons: number): number {
        return gallons * this.GAL_CUB_FT;
    }

    // return pounds (mass)
    static convertVolumeToPounds(cubicFeet: number): number {
        return cubicFeet * this.CUB_FT_LBS;
    }

    static convertGallonsToPounds(gallons: number): number {
        return this.convertVolumeToPounds(this.convertGallonsToCubicFeet(gallons));
    }

    // mass in lbs, temp delta in degrees F - returns BTU for substance
    static calculateEnergyDifference(mass: number, tempDelta: number): number {
        return mass * this.SUBSTANCE_SPECIFIC_HEAT * tempDelta;
    }

    // power in BTU, mass in pounds
    static calculateTempChange(btu: number, mass: number): number {
        return btu / (mass * this.SUBSTANCE_SPECIFIC_HEAT)
    }
}