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
  constructor(private transportationTeamService:TransportationTeamService){}
  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(){
    this.transportationTeamService.getTeams().subscribe((response)=>{
      this.transportationTeams=response.data;
      this.dataLoaded=true;
    })
  }

}
