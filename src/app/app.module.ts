import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickTrackerModule } from 'projects/click-tracker/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
