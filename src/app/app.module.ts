import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HolidayListService } from './app.service'


import { app_routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [HTTP_PROVIDERS,HolidayListService],
  declarations: [AppComponent, HomeComponent, DetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }