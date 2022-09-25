import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddDealerComponent } from './component/add-dealer/add-dealer.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewDealerComponent } from './component/admin-view-dealer/admin-view-dealer.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    AddDealerComponent,
   
    AdminComponent,
        AdminViewDealerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
