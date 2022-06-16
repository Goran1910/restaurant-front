import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenName: string = "jwt";
  private baseUrl: string = "http://localhost:8082/auth/";

  constructor(
    private apiService: ApiService,
    private accountService: AccountService,
    private router: Router
  ) { }

  login(user: any): Observable<string> {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      'username': user.username,
      'password': user.password
    };

    return this.apiService.post(this.baseUrl + "login", JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        localStorage.setItem(this.tokenName, res.body.accessToken);
        return res.body.accessToken;
      }));
  }

  signup(user: User) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.apiService.post(this.baseUrl + "signup", JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.accountService.currentUser = null;
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/']);
  }

  tokenIsPresent() {
    var token = localStorage.getItem(this.tokenName);
    return token != undefined && token != null;
  }

  getToken() {
    return localStorage.getItem(this.tokenName)
  }
}
