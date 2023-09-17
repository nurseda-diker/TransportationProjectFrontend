import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Message } from '../models/message';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl="https://localhost:7216/api/";
  constructor(private httpClient:HttpClient) { }

  getMessages():Observable<ListResponseModel<Message>>{
    let newPath=this.apiUrl + "messages/getall";
    return this.httpClient.get<ListResponseModel<Message>>(newPath);
  }

  add(message:Message):Observable<ResponseModel>{
   
    return this.httpClient.post<ResponseModel>(this.apiUrl +"messages/add",message);
  }

  

}
