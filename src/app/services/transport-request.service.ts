import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { TransportRequest } from '../models/transportRequest';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class TransportRequestService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getTransportRequests():Observable<ListResponseModel<TransportRequest>>{
    let newPath=this.apiUrl + "transportRequests/getall";
    return this.httpClient.get<ListResponseModel<TransportRequest>>(newPath);
  }

  add(transportRequest:TransportRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"transportRequests/add",transportRequest);
  }

}
