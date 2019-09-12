import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantHomeBodyComponent } from './restaurant-home-body/restaurant-home-body.component';
import { RestaurantListCardComponent } from './restaurant-list-card/restaurant-list-card.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { FormComponent } from './form/form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  
  {path: 'restaurant-home',
  component: RestaurantHomeComponent},
  
  {path: ':id', component: RestaurantListCardComponent},
  {path: 'form/:id',component: FormComponent},
  {path: 'form/confirmation/:id', component: ConfirmationComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent,
  RestaurantListComponent,
  RestaurantListCardComponent,
  PageNotFoundComponent]