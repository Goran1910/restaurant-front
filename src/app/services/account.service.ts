import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  basePath = 'http://localhost:8081/api/registration/whoami'
  currentUser: any;

  constructor(
    private apiService: ApiService,
  ) {
  }

  getMyInfo() {
    return this.apiService.get(this.basePath)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }
}
