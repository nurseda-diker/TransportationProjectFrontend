import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getReservations():Observable<ListResponseModel<Reservation>>{
    let newPath=this.apiUrl + "reservations/getall";
    return this.httpClient.get<ListResponseModel<Reservation>>(newPath);
  }



}
