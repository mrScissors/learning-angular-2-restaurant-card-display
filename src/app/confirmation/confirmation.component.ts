import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RestaurantDataService } from '../restaurant-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor( private _restaurantService: RestaurantDataService, private route: ActivatedRoute,private router: Router) { };
  public restoId;
  public restaurants = [];
  public date;
  
  ngOnInit() {
    this.restaurants = this._restaurantService.getRestaurants();
    this.route.url.subscribe(p =>{
      console.log("thevvalue p: ", p)
      this.restoId = p[2]
    });
    //console.log("resstroo", this.restaurants[2].name, (this.restoId));

    this.date = this._restaurantService.getDate();
    //console.log("ddaaatttee", this.date);
  }

}
