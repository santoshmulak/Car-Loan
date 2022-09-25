import { Component, OnInit } from '@angular/core';
import { Adddealer } from 'src/app/model/adddealer/adddealer';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-view-dealer',
  templateUrl: './view-dealer.component.html',
  styleUrls: ['./view-dealer.component.css']
})
export class ViewDealerComponent implements OnInit {



  constructor(private dealer:CommonService) { }
  dealerlist:Adddealer[];
  
  ngOnInit(): void {
    this.dealer.getdata().subscribe(list => this.dealerlist = list);
  }
 
}
