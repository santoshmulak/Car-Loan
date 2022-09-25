import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application/application';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  applications:Application[];
  score:number=0;
 constructor(private service:CommonService) { }

 ngOnInit(): void {
   this.refreshlist();
 }
 refreshlist() {
   this.service.retrieveAllCustomer().subscribe(
     data=>{
       this.applications=data;
       console.log(this.applications)
     }
   )

 }

 delete(customerId:number)
 {
   console.log('  ------------->'+customerId)

   this.service.deleteApplication(customerId).subscribe(
   response => {
   console.log(response);
   
   this.refreshlist();
   }
)
 }
}
