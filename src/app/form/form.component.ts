import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RestaurantDataService } from '../restaurant-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private _restaurantService: RestaurantDataService, private route: ActivatedRoute,private router: Router) { };
  public restoId;
  public restaurants = [];
  
  ngOnInit() {
    this.restaurants = this._restaurantService.getRestaurants();
    this.route.url.subscribe(p =>{
      console.log("thevvalue p: ", p)
      this.restoId = p[1]
    });
    //console.log("resstroo", this.restaurants[2].name, (this.restoId));
  }

  setDateForm(date){
    this._restaurantService.setDate(date);
  }

}
