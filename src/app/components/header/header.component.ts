import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public accountService: AccountService, private authService: AuthService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe();
  }

  logout() {
    this.accountService.currentUser = null;
    this.authService.logout();
  }

}
