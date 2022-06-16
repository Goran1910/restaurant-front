import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  basePath = 'http://localhost:8082/api/whoami'
  currentUser: any;

  constructor(private apiService: ApiService) {}

  getMyInfo() {
    return this.apiService.get(this.basePath)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }

  isLogged() {
    return !!this.currentUser;
  }

  isManager() {
    return (!!this.currentUser) && (this.checkRole('ROLE_MANAGER'));
  }

  isAdmin() {
    return (!!this.currentUser) && (this.checkRole('ROLE_ADMIN'));
  }

  checkRole(role: string) {
    for (var r of this.currentUser.roles) {
      if (r.name == role) {
        return true;
      }
    }
    return false;
  }
}
