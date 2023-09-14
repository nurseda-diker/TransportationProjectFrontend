import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies:Company[]=[]
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


}
