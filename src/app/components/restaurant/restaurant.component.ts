import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestaurantDTO } from 'src/app/entity/RestaurantDTO';
import { AccountService } from 'src/app/services/account.service';
import { ReserveTableDialogComponent } from '../reserve-table-dialog/reserve-table-dialog.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {

  @Input()
  restaurant!: RestaurantDTO;

  rate: number = 4;

  constructor(public accountService: AccountService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  opetReserveTableDialog() {
    this.dialog.open(ReserveTableDialogComponent, {data: {restaurantName: this.restaurant.name}})
  }

}
