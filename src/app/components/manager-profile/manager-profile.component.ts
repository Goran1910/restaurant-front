import { Component, Input, OnInit } from '@angular/core';
import { ManagerDTO } from 'src/app/entity/ManagerDTO';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent implements OnInit {

  @Input()
  manager!: ManagerDTO;

  constructor() { }

  ngOnInit(): void {
  }

  formRestaurantNames() {
    var names = '';
    for (let name of this.manager.restaurantNames) {
      console.log(name);
      names += name + ', ';
    }
    names == '' ? names = 'Нема' : names = this.removeLastCommaAndSpace(names);
    return names;
  }

  removeLastCommaAndSpace(string: string){
    return string.slice(0, string.length-2);
  }

}
