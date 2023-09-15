import { RequestTypeService } from './../../services/request-type.service';
import { Component, OnInit } from '@angular/core';
import { RequestType } from 'src/app/models/requestType';

@Component({
  selector: 'app-request-type',
  templateUrl: './request-type.component.html',
  styleUrls: ['./request-type.component.css']
})
export class RequestTypeComponent implements OnInit {

  currentRequestType:RequestType;
  requestTypes:RequestType[]=[]
  dataLoaded=false;
  constructor(private requestTypeService:RequestTypeService){}
  ngOnInit(): void {
    this.getRequestTypes();
  }

  getRequestTypes(){
    this.requestTypeService.getRequestTypes().subscribe((response)=>{
      this.requestTypes=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentRequestType(requestType:RequestType){
    this.currentRequestType=requestType;
  }

  getCurrentRequestType(requestType:RequestType){
    if(requestType==this.currentRequestType){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

}
