import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableReservationRequest } from 'src/app/entity/TableReservationRequest';
import { RestaurantService } from 'src/app/services/restaurant.service';

export interface TableReservationData {
  restaurantName: string;
}

@Component({
  selector: 'app-reserve-table-dialog',
  templateUrl: './reserve-table-dialog.component.html',
  styleUrls: ['./reserve-table-dialog.component.css']
})
export class ReserveTableDialogComponent implements OnInit {

  name: string = '';
  form!: UntypedFormGroup;
  showSuccMessage: Boolean = false;
  showErrorMessage: Boolean = false;
  message: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: TableReservationData,
   private formBuilder: UntypedFormBuilder, 
   private restaurantService: RestaurantService) { 
    this.name = data.restaurantName;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      numOfPeople: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    var request = new TableReservationRequest(this.form.value.numOfPeople, this.form.value.date, this.name);
    this.restaurantService.createTableReservation(request).subscribe(
      (res) => {
      this.showSuccMessage = true;
      this.showErrorMessage = false;
      this.message = 'Успешно сте резервисали сто.'
    }, (error) => {
      this.showErrorMessage = true;
      this.showSuccMessage = false;
      this.message = 'Нема слободних столова у задатом термину.'
    });
  }

}
