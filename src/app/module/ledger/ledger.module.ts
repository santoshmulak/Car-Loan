import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { LedgerComponent } from './ledger.component';
import { AddLedgerComponent } from './add-ledger/add-ledger.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewLedgerComponent,
    LedgerComponent,
    AddLedgerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LedgerModule { }
