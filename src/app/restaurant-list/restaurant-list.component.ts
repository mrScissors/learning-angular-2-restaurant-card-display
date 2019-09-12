import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RestaurantDataService } from '../restaurant-data.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public restaurants = [];
  public show = true;
  public i=0;
  constructor(private _restaurantService: RestaurantDataService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.restaurants = this._restaurantService.getRestaurants();
   
  }

  goRestaurant(restau){
    this.router.navigate([restau.id]);
  }



}
