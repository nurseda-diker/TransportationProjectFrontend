import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { TransportRequestAddComponent } from './components/transport-request-add/transport-request-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CompanyDetailComponent},
  {path:"companies",component:CompanyDetailComponent},
  {path:"companies/:companyId",component:CompanyDetailComponent},
  {path:"companies/requestTypes/:requestTypeId",component:CompanyDetailComponent},
  {path:"transportRequests/add",component:TransportRequestAddComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
