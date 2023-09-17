import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TransportationTeam } from '../models/transportationTeam';

@Injectable({
  providedIn: 'root'
})
export class TransportationTeamService {

  apiUrl="https://localhost:7216/api/";
  
  constructor(private httpClient:HttpClient) { }

  getTeams():Observable<ListResponseModel<TransportationTeam>>{
    let newPath=this.apiUrl + "transportationTeams/getall";
    return this.httpClient.get<ListResponseModel<TransportationTeam>>(newPath);
  }

  getTeamsByCompanyId(companyId:number):Observable<ListResponseModel<TransportationTeam>>{
    let newPath=this.apiUrl + "transportationTeams/getteambycompanyid?companyId=" + companyId;
    return this.httpClient.get<ListResponseModel<TransportationTeam>>(newPath);
  }



  
}
