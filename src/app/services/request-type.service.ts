import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { RequestType } from '../models/requestType';

@Injectable({
  providedIn: 'root'
})
export class RequestTypeService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getRequestTypes():Observable<ListResponseModel<RequestType>>{
    let newPath=this.apiUrl + "requestTypes/getall";
    return this.httpClient.get<ListResponseModel<RequestType>>(newPath);
  }



}
