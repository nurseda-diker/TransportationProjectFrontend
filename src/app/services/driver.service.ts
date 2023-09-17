import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getDrivers():Observable<ListResponseModel<Driver>>{
    let newPath=this.apiUrl + "drivers/getall";
    return this.httpClient.get<ListResponseModel<Driver>>(newPath);
  }

  getDriversByVehicleId(vehicleId:number):Observable<ListResponseModel<Driver>>{
    let newPath=this.apiUrl + "drivers/getdriversbyvehicleid?vehicleId=" + vehicleId;
    return this.httpClient.get<ListResponseModel<Driver>>(newPath);
  }


}
