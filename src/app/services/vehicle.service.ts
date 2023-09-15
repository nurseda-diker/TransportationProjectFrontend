import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl="https://localhost:7216/api/";
  
  constructor(private httpClient:HttpClient) { }

  getVehicles():Observable<ListResponseModel<Vehicle>>{
    let newPath=this.apiUrl + "vehicles/getall";
    return this.httpClient.get<ListResponseModel<Vehicle>>(newPath);
  }
}
