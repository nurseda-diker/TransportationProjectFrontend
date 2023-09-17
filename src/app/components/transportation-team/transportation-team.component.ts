import { ActivatedRoute } from '@angular/router';
import { TransportationTeamService } from './../../services/transportation-team.service';
import { TransportationTeam } from './../../models/transportationTeam';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportation-team',
  templateUrl: './transportation-team.component.html',
  styleUrls: ['./transportation-team.component.css']
})
export class TransportationTeamComponent implements OnInit{

  transportationTeams:TransportationTeam[]=[]
  dataLoaded=false;
  constructor(private transportationTeamService:TransportationTeamService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["companyId"]){
        this.getTeamsByCompanyId(params["companyId"])
      }
      else{
        this.getTeams();
      }
    })
    
  }

  getTeams(){
    this.transportationTeamService.getTeams().subscribe((response)=>{
      this.transportationTeams=response.data;
      this.dataLoaded=true;
    })
  }

  getTeamsByCompanyId(companyId:number){
    this.transportationTeamService.getTeamsByCompanyId(companyId).subscribe(response=>{
      this.transportationTeams=response.data;
      this.dataLoaded=true;
    })
  }

}
