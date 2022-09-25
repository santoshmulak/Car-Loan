import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private dealerservice:CommonService,
    private roter:Router) { }
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
        
      }
    )
  }
 
  onSubmit()
  {
    alert("Do you want to submit form");
    
    // if(this.registerForm.valid){
    //   console.log("in submit method");
        this.dealerservice.saveDealer(this.registerForm.value).subscribe();
        console.log(this.registerForm.value)
        alert("your form submited successfully");
   
    // }
   
  }
  
}
