import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { RelationExecutiveComponent } from './relation-executive.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCustomerComponent,
    RelationExecutiveComponent,
    ViewCustomerComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RelationExecutiveModule { }
