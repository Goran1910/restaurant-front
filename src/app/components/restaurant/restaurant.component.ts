import { Component, Input, OnInit } from '@angular/core';
import { RestaurantDTO } from 'src/app/entity/RestaurantDTO';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant!: RestaurantDTO;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

}
