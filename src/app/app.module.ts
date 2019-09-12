import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantDataService } from './restaurant-data.service';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { RestaurantHomeBodyComponent } from './restaurant-home-body/restaurant-home-body.component';
import { RestaurantListCardComponent } from './restaurant-list-card/restaurant-list-card.component';
import { FormComponent } from './form/form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    HomePageComponent,
    RestaurantHomeComponent,
    RestaurantHomeBodyComponent,
    RestaurantListCardComponent,
    FormComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [RestaurantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
