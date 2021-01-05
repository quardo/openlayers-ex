import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { CustomControlsComponent } from './custom-controls/custom-controls.component';
import { OlInteractionComponent } from './ol-interaction/ol-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    OlMapComponent,
    CustomControlsComponent,
    OlInteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
