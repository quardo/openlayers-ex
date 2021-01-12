import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { OlInteractionComponent } from './ol-interaction/ol-interaction.component';
import { OlAddFeatureComponent } from './ol-add-feature/ol-add-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    OlMapComponent,
    OlInteractionComponent,
    OlAddFeatureComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
