import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {SelectornumericoComponent} from './components/selectornumerico/selectornumerico.component';
import {CronometroComponent} from './components/cronometro/cronometro.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectornumericoComponent,
    CronometroComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
