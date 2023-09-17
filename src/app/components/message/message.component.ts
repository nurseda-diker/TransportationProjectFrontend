import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private messageService:MessageService,private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createMessageForm();
  }

  
  createMessageForm(){
    this.messageForm=this.formBuilder.group({
      senderId:["",Validators.required],
      receiverId:["",Validators.required],
      messageContent:["",Validators.required],
      messageDate:["",Validators.required],

    })
  }

  add(){
    if(this.messageForm.valid){
      let messageModel=Object.assign({},this.messageForm.value);
      this.messageService.add(messageModel).subscribe(response=>{
        this.toastrService.success(response.message,"Mesaj gönderildi");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors[i].length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Mesaj gönderme başarısız");
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat!");
      console.log(this.messageForm)
    }
  }

 


}
