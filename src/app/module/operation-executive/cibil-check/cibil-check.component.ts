import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/model/application/application';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-cibil-check',
  templateUrl: './cibil-check.component.html',
  styleUrls: ['./cibil-check.component.css']
})
export class CibilCheckComponent implements OnInit {

  applications:Application[];
  score:number=0;
  constructor(private service:CommonService,private router:Router) { }

  ngOnInit(): void {
   this.refreshlist()
  }



  refreshlist() {
    this.service.getApplication().subscribe(
      data=>{
        this.applications=data;
        console.log(this.applications)
      }
    )

  }


//   update(application)
//   {


//     console.log('  ------------->'+application)
//     console.log("register")
//     this.router.navigate(['relationexecutive','addCustomers'])
  
//   }
//  delete(customerId:number)
//   {
//     console.log('  ------------->'+customerId)

//     this.service.deleteApplication(customerId).subscribe(
//     response => {
//     console.log(response);
    
//     this.refreshlist();
//     }
// )
//   }
 
 checkScore(customer)
 {
   
   this.score=customer.adharCardNumber%1000;
   customer.cibilScore=this.score 
   if(this.score>=750)
   {
     customer.loanStatus='Acceped';
    
     this.service.updateApplication(customer.customerId,customer).subscribe()
     console.log('updated customer'+ customer.loanStatus)
     
   }
   else
   {
     customer.loanStatus='Rejected'
     
     customer.documentStatus='Rejected'
     
     this.service.updateApplication(customer.customerId,customer).subscribe()
   }

   console.log(this.score)
  
 }

  
}
