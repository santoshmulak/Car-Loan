import { Component, OnInit } from '@angular/core';
import { Adddealer } from 'src/app/model/adddealer/adddealer';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-admin-view-dealer',
  templateUrl: './admin-view-dealer.component.html',
  styleUrls: ['./admin-view-dealer.component.css']
})
export class AdminViewDealerComponent implements OnInit {

  constructor(private dealer:CommonService) { }
  dealerlist:Adddealer[];
  
  ngOnInit(): void {
    this.dealer.getdata().subscribe(list => this.dealerlist = list);
  }



  deletedealer(id: number) {
    this.dealer.deletedealer(id).subscribe();
    window.location.reload();
    
  }
}
