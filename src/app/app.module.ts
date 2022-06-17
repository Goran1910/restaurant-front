import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { ManagersPageComponent } from './components/managers-page/managers-page.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { BarRatingModule } from "ngx-bar-rating";
import { ReserveTableDialogComponent } from './components/reserve-table-dialog/reserve-table-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

const appRoutes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'restaurants', component: RestaurantsPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'inventory', component: InventoryPageComponent },
  { path: 'managers', component: ManagersPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HeaderComponent,
    RestaurantsPageComponent,
    ProfilePageComponent,
    InventoryPageComponent,
    RestaurantComponent,
    ReserveTableDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    BarRatingModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AccountService,
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
