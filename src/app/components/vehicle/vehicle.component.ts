import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { CompanyDetail } from 'src/app/models/companyDetail';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit{

  vehicles:Vehicle[]=[]
  companyDetails:CompanyDetail[]=[]
  dataLoaded=false;
  constructor(private vehicleService:VehicleService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["companyId"]){
        this.getVehiclesByCompanyId(params["companyId"]);
      }
      else{
        this.getVehicles();
      }
    })
      }
  

  getVehicles(){
    this.vehicleService.getVehicles().subscribe(response=>{
      this.vehicles=response.data;
      this.dataLoaded=true;
    })
  }

  getVehiclesByCompanyId(companyId:number){
    this.vehicleService.getVehiclesByCompanyId(companyId).subscribe(response=>{
      this.vehicles=response.data;
      this.dataLoaded=true;
    })
  }



}
