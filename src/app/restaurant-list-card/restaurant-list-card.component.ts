import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RestaurantDataService } from '../restaurant-data.service';



@Component({
  selector: 'app-restaurant-list-card',
  templateUrl: './restaurant-list-card.component.html',
  styleUrls: ['./restaurant-list-card.component.css']
})
export class RestaurantListCardComponent implements OnInit {

  constructor( private _restaurantService: RestaurantDataService, private route: ActivatedRoute,private router: Router) { }
  public restoId; 
  public restaurants = [];
  ngOnInit() {
    this.restaurants = this._restaurantService.getRestaurants();
    this.route.url.subscribe(p =>{
      console.log("restuarnlist:; ",typeof p);
      this.restoId = p;
    });
  }
}
