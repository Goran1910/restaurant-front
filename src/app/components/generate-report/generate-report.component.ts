import { Component, OnInit } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DailyStat } from 'src/app/entity/DailyStat';
import { RestaurantDTO } from 'src/app/entity/RestaurantDTO';
import { RestaurantService } from 'src/app/services/restaurant.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  restaurants: RestaurantDTO[] = [];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe((restaurants) => {
      this.restaurants = restaurants;
      this.generatePDF();
    })
  }

  generatePDF() {
    var counter = 0;
    var content: { table: { headerRows: number; widths: string[]; body: (number[] | (string | { text: string; colSpan: number; })[])[]; }; }[] = [];
    
    for (let restaurant of this.restaurants) {
      this.restaurantService.getStatsByRestName(restaurant.name).subscribe((stats) => {

        var body = [];
        
        body.push([{text: restaurant.name, colSpan: 3}, '', '']);
        body.push(['Дан', 'Број резервација', 'Број људи']);

        for (let stat of stats) {
          body.push([stat.day, stat.numOfReservations, stat.numOfPeople]);
        }
        
        let table = { headerRows: 2, widths: ['auto', 'auto', 'auto'], body: body };
        content.push({table});

        counter++;
        if(counter == this.restaurants.length){
          let docDefinition = {
            header: 'Извештај о броју резервација и броју људи по дану у протеклих месец дана',
            content: content
          };
      
          pdfMake.createPdf(docDefinition).open();
        }

      })
    }

  }

}
