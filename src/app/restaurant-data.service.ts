import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  
  constructor() { }

  public date_service;
  getRestaurants(){
    return [
      {"id": 1, "name": "Varcity Ruby", "menu":["dish1", "dish2", "dish3", "dish5"]},
      {"id": 2, "name": "Madurai Idli", "menu":["dish21", "dish22", "dish23", "dish25"]},
      {"id": 3, "name": "Srinidhi Sagar", "menu":["dish31", "dish32", "dish33", "dish35"]},
      {"id": 4, "name": "Indian Coffee House", "menu":["dish41", "dish42", "dish43", "dish45"]}
    ]
  }

  setDate(date){
    this.date_service = date;
    //console.log("datttttte servvvvvvice",this.date_service);
  }

  getDate(){
    return this.date_service;
  }
}
