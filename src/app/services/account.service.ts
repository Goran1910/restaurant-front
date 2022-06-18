import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ManagerDTO } from '../entity/ManagerDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  basePath = 'http://localhost:8082/api/'
  currentUser: any;

  constructor(private apiService: ApiService) {}

  getMyInfo() {
    return this.apiService.get(this.basePath + 'whoami')
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }

  getAllManagers(): Observable<ManagerDTO[]> {
    return this.apiService.get(this.basePath + 'managers');
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
