import { RequestTypeService } from './../../services/request-type.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransportRequestService } from './../../services/transport-request.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TransportRequest } from 'src/app/models/transportRequest';
import { RequestType } from 'src/app/models/requestType';

@Component({
  selector: 'app-transport-request-add',
  templateUrl: './transport-request-add.component.html',
  styleUrls: ['./transport-request-add.component.css']
})
export class TransportRequestAddComponent implements OnInit {

  transportRequestAddForm:FormGroup;
  transportRequest:TransportRequest[]=[]
  requestTypes:RequestType[]=[]
  constructor(private transportRequestService:TransportRequestService,private formBuilder:FormBuilder,private toastrService:ToastrService,private requestTypeService:RequestTypeService){}

  ngOnInit(): void {
    this.getRequestTypes();
    this.createtransportRequestAddForm();
  }

  createtransportRequestAddForm(){
    this.transportRequestAddForm=this.formBuilder.group({
      name:["",Validators.required]
    });
  }

  add(){
    if(this.transportRequestAddForm.valid){
      let requestModel=Object.assign({},this.transportRequestAddForm.value);
      this.transportRequestService.add(requestModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors[i].length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat!");
    }
  }

  getRequestTypes(){
    this.requestTypeService.getRequestTypes().subscribe(response=>{
      this.requestTypes=response.data;
    })
  }







}
