import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private  empservice:CommonService,private route:Router) { }
  
  registerForm:FormGroup;

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group(
      {
        employeeId:[],
        firstName:[''],
        lastName:[''],
        role:[''],
        emailId:[''],
        date:[''],
        mobileNumber:[''],
        username:[''], 
        password:[''],
       
      }
    )
  }
 
  onSubmit()
  {
    alert("Do you want to submit form");
    
    // if(this.registerForm.valid){
    //   console.log("in submit method");
        this.empservice.saveEmployee(this.registerForm.value).subscribe();
        alert("your form submited successfully");
     
      
     
   
  }
  

}
