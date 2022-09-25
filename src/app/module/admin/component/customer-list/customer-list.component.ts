import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  
  constructor(private service:CommonService) { }

  
 applications:Application[];

  
  ngOnInit(): void {
    this.service.getAllDocumentVerifiedList().subscribe(
      data=>{
        this.applications=data
        console.log(this.applications)
  
  }
    )
   
  }

  
}
