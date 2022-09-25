import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private dealerService:CommonService) { }
  registerForm:FormGroup;

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group(
      {
       
        dealerId:[],
        firstName:[''],
        lastName:[''],
        showroomName:[''],
        bankName:[''],
        ifscCode:[''],
        accountNumber:[''],
        emailId:[''],
        Amount:['']
        
      }
    )
  }
 
  
  onSubmit()
  {
    alert("Money deposited SuccessFully----!");
    
    // if(this.registerForm.valid){
    //   console.log("in submit method");
       // this.dealerservice.saveDealer(this.registerForm.value).subscribe();
        
       // alert("your form submited successfully");
      //this.roter.navigate(['login/admin/add-dealer']);
      
    // }
   
  }

}
