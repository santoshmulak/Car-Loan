import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { DisbursmentComponent } from './disbursment.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ViewDealerComponent,
    SendMoneyComponent,
    DisbursmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DisbursmentModule { }
