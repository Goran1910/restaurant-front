import { Component, OnInit } from '@angular/core';
import { RestaurantDTO } from 'src/app/entity/RestaurantDTO';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {

  restaurants: RestaurantDTO[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe((restaurants) => {
      this.restaurants = restaurants;
    })
  }

}
