import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { TransportRequestAddComponent } from './components/transport-request-add/transport-request-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { DriverComponent } from './components/driver/driver.component';
import { TransportationTeamComponent } from './components/transportation-team/transportation-team.component';
import { MessageComponent } from './components/message/message.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CompanyDetailComponent},
  {path:"companies",component:CompanyDetailComponent},
  {path:"companies/:companyId",component:CompanyDetailComponent},
  {path:"companies/requestTypes/:requestTypeId",component:CompanyDetailComponent},
  {path:"transportRequests/add",component:TransportRequestAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"vehicles/:companyId",component:VehicleComponent},
  {path:"drivers/:vehicleId",component:DriverComponent},
  {path:"team/:companyId",component:TransportationTeamComponent},
  {path:"message",component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
