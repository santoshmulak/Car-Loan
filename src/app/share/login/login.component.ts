import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthonticationService } from 'src/app/service/hardcoded-authontication/hardcoded-authontication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private hardcodedAuthService:HardcodedAuthonticationService) { }

  username='Omkar'
  password=''

  ngOnInit(): void {
  }


  invalidLogin:boolean=false
  errorMessage:string='Invalid Password'

  login()
  {
    


    if(this.hardcodedAuthService.authenticatere(this.username,this.password)){
      this.router.navigate(['relationexecutive'])
      this.invalidLogin = false
    } else 
    {
     this.invalidLogin = true
   }
    
    
    
    if(this.hardcodedAuthService.authenticateoe(this.username,this.password)){
      this.router.navigate(['operationexecutive'])
      this.invalidLogin = false
    }else {
      this.invalidLogin = true
    }
     
    
    
    
    if(this.hardcodedAuthService.authenticatecm(this.username,this.password)){
      this.router.navigate(['creditmanager'])
      this.invalidLogin = false
    }else {
      this.invalidLogin = true
    }
    
    
    
    if(this.hardcodedAuthService.authenticateadmin(this.username,this.password)){
      this.router.navigate(['admin'])
      this.invalidLogin = false
    }else  {
      this.invalidLogin = true
    }
    
    
    if(this.hardcodedAuthService.authenticatedb(this.username,this.password)){
      this.router.navigate(['disbursment'])
      this.invalidLogin = false
    }else {
      this.invalidLogin = true
    }
    if(this.hardcodedAuthService.authenticateld(this.username,this.password)){
      this.router.navigate(['ledger'])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
    



  }
}
