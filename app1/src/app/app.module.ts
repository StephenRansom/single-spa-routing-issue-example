import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { SubrouteComponent } from './subroute/subroute.component';
import { AnothersubrouteComponent } from './anothersubroute/anothersubroute.component';

@NgModule({
  declarations: [
    AppComponent,
    SubrouteComponent,
    AnothersubrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app1'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
