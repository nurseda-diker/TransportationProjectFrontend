import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies:Company[]=[]
  currentCompany:Company;
  dataLoaded=false;
  constructor(private companyService:CompanyService){}
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe((response)=>{
      this.companies=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentCompany(company:Company){
    this.currentCompany=company;
  }

  getCurrentCompany(company:Company){
    if(company==this.currentCompany){
      return "list-group-item active";
    }
    else{
      return "list-group-item"
    }
    
  }

  


}
