import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  reservations:Reservation[]=[]
  dataLoaded=false;
  constructor(private reservationService:ReservationService){}
  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(){
    this.reservationService.getReservations().subscribe((response)=>{
      this.reservations=response.data;
      this.dataLoaded=true;
    })
  }



}
