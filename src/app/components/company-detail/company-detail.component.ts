import { VehicleService } from './../../services/vehicle.service';
import { CompanyDetail } from 'src/app/models/companyDetail';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  companyDetails: CompanyDetail[] = [];
  vehicles:Vehicle[]=[]
  dataLoaded = false;
  constructor(private companyService: CompanyService,private activatedRoute:ActivatedRoute,private vehicleService:VehicleService) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["companyId"]){
        this.getCompaniesById(params["companyId"]);
        
      }
      else if(params["id"]){
        this.getCompaniesByRequestId(params["id"]);   
      }
      else{
        this.getCompanyDetails();
        this.getVehicles();
      }
    })
    
  }

  getCompanyDetails() {
    this.companyService.getCompanyDetails().subscribe((response) => {
      this.companyDetails = response.data;
      this.dataLoaded = true;
     
    });
  }

  getCompaniesById(companyId:number){
    this.companyService.getCompaniesById(companyId).subscribe((response)=>{
      this.companyDetails=response.data;
      this.dataLoaded=true;
     
    })
  }

  getCompaniesByRequestId(id:number){
    this.companyService.getCompaniesByRequestId(id).subscribe((response)=>{
      this.companyDetails=response.data;
      this.dataLoaded=true;
    })
  }

  getVehicles(){
    this.vehicleService.getVehicles().subscribe(response=>{
      this.vehicles=response.data;
    })
  }











 
  

  
    
}
