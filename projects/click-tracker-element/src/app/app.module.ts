import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ClickTrackerModule, ClickTrackerComponent } from 'click-tracker';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ClickTrackerModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const ClickTrackerElm = createCustomElement(ClickTrackerComponent, {injector: this.injector});
    customElements.define('lib-click-tracker', ClickTrackerElm);
  }
}
