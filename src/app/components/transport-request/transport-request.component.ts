import { TransportRequestService } from './../../services/transport-request.service';
import { Component, OnInit } from '@angular/core';
import { TransportRequest } from 'src/app/models/transportRequest';

@Component({
  selector: 'app-transport-request',
  templateUrl: './transport-request.component.html',
  styleUrls: ['./transport-request.component.css']
})
export class TransportRequestComponent implements OnInit{

  transportRequests:TransportRequest[]=[]
  dataLoaded=false;
  constructor(private transportRequestService:TransportRequestService){}
  ngOnInit(): void {
   this.getTransportRequests();
  }

  getTransportRequests(){
    this.transportRequestService.getTransportRequests().subscribe((response)=>{
      this.transportRequests=response.data;
      this.dataLoaded=true;
    })
  }
  
  
}
