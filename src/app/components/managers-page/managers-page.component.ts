import { Component, OnInit } from '@angular/core';
import { ManagerDTO } from 'src/app/entity/ManagerDTO';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-managers-page',
  templateUrl: './managers-page.component.html',
  styleUrls: ['./managers-page.component.css']
})
export class ManagersPageComponent implements OnInit {

  managers: ManagerDTO[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllManagers().subscribe((managers) => {
      console.log(managers);
      this.managers = managers;
    })
  }

}
