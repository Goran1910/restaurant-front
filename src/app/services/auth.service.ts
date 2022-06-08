import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenName: string = "jwt";

  constructor(
    private apiService: ApiService,
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient
  ) { }

  login(user: any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      'username': user.username,
      'password': user.password
    };

    return this.apiService.post("http://localhost:8081/auth/login", JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        localStorage.setItem(this.tokenName, res.body.accessToken);
      }));
  }

  signup(user: any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    console.log('User pre slanja: ', JSON.stringify(user));

    return this.apiService.post("http://localhost:8081/auth/signup", JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.accountService.currentUser = null;
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/logIn']);
  }

  tokenIsPresent() {
    var token = localStorage.getItem(this.tokenName);
    return token != undefined && token != null;
  }

  getToken() {
    return localStorage.getItem(this.tokenName)
  }
}
