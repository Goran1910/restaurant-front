import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantDTO } from '../entity/RestaurantDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl: string = "http://localhost:8082/api/restaurant/";

  constructor(private apiService: ApiService) { }

  getAll(): Observable<RestaurantDTO[]> {
    return this.apiService.get(this.baseUrl + 'all');
  }
}
