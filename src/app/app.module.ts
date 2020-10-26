import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationControlsComponent } from './simulation-controls/simulation-controls.component';
import { SimulationStatesComponent } from './simulation-states/simulation-states.component';
import { SimulationDisplayComponent } from './simulation-display/simulation-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationControlsComponent,
    SimulationStatesComponent,
    SimulationDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
