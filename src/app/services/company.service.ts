import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { CompanyDetail } from '../models/companyDetail';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl="https://localhost:7216/api/";
  
  constructor(private httpClient:HttpClient) { }

  getCompanies():Observable<ListResponseModel<Company>>{
    let newPath=this.apiUrl + "companies/getall";
    return this.httpClient.get<ListResponseModel<Company>>(newPath);
  }

  getCompanyDetails():Observable<ListResponseModel<CompanyDetail>>{
    let newPath=this.apiUrl + "companies/getcompanydetails";
    return this.httpClient.get<ListResponseModel<CompanyDetail>>(newPath);
  }

  getCompaniesById(companyId:number):Observable<ListResponseModel<CompanyDetail>>{
    let newPath=this.apiUrl + "companies/getbycompanyid?companyId=" + companyId;
    return this.httpClient.get<ListResponseModel<CompanyDetail>>(newPath);
  }

  getCompaniesByRequestId(requestId:number):Observable<ListResponseModel<CompanyDetail>>{
    let newPath=this.apiUrl + "companies/getcompanydetailsbyrequestid?requestId="+ requestId;
    return this.httpClient.get<ListResponseModel<CompanyDetail>>(newPath);
  }



}
