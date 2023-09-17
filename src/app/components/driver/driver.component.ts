import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from './../../services/driver.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit{

  drivers:Driver[]=[]
  dataLoaded=false;
  constructor(private driverService:DriverService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["vehicleId"]){
        this.getDriversByVehicleId(params["vehicleId"]);
      }
      else{
        this.getDrivers();
      }
    })
  }

  getDrivers(){
    this.driverService.getDrivers().subscribe(response=>{
      this.drivers=response.data;
      this.dataLoaded=true;
    })
  }

  getDriversByVehicleId(vehicleId:number){
    this.driverService.getDriversByVehicleId(vehicleId).subscribe(response=>{
      this.drivers=response.data;
      this.dataLoaded=true;
    })
  }


}
