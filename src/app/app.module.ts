import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CompanyComponent } from './components/company/company.component';
import { RequestTypeComponent } from './components/request-type/request-type.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransportRequestComponent } from './components/transport-request/transport-request.component';
import { TransportRequestAddComponent } from './components/transport-request-add/transport-request-add.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TransportationTeamComponent } from './components/transportation-team/transportation-team.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { DriverComponent } from './components/driver/driver.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CompanyComponent,
    RequestTypeComponent,
    CompanyDetailComponent,
    TransportRequestComponent,
    TransportRequestAddComponent,
    ReservationComponent,
    TransportationTeamComponent,
    LoginComponent,
    RegisterComponent,
    VehicleComponent,
    DriverComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
