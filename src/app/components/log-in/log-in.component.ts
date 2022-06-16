import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  title: string = 'Пријава';
  form!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe((token) => 
      {
        this.accountService.getMyInfo().subscribe((res) => {
          this.router.navigate(['/restaurants']);
        });
      }
    );
  }

}
