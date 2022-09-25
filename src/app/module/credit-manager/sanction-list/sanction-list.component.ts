import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application/application';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-sanction-list',
  templateUrl: './sanction-list.component.html',
  styleUrls: ['./sanction-list.component.css']
})
export class SanctionListComponent implements OnInit {

  constructor(private service:CommonService) { }

  
 applications:Application[];

 ngOnInit(): void {
   console.log(this.applications)
   this.service.getAllDocumentVerifiedList().subscribe(
     data=>{
       this.applications=data
       console.log(this.applications)

 }
   )
 }
 generate(application:Application)
 {
      console.log(application);
      this.service.getbyid(application);
 }
}
