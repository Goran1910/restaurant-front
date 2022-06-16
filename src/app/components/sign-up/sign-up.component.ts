import { BooleanInput } from '@angular/cdk/coercion';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title: string = 'Креирање налога';
  form!: FormGroup;
  error: BooleanInput = false;
  errorText: string = '';

  constructor(private formBuilder: FormBuilder,
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      passwordAgain: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      phoneNumber: ['']
    });
  }

  onSubmit() {
    if (!this.equalPasswords()) {
      this.error = true;
      this.errorText = 'Лозинке нису исте!';
      return;
    }

    this.error = false;
    var user = new User(this.form.value.username, this.form.value.password,
       this.form.value.email, this.form.value.phoneNumber, "ROLE_CLIENT");
    
    this.authService.signup(user).subscribe(data => {
      this.error = false;
      this.router.navigate(["/"]);
    },
      error => {
        console.log('Sign up error');
        this.error = true;
        this.errorText = 'Грешка!'
      });
  }

  equalPasswords() {
    return this.form.value.password == this.form.value.passwordAgain;
  }

}
