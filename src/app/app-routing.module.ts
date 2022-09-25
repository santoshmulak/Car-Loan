import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './module/admin/admin.component';
import { AddDealerComponent } from './module/admin/component/add-dealer/add-dealer.component';
import { AddEmployeeComponent } from './module/admin/component/add-employee/add-employee.component';
import { AdminViewDealerComponent } from './module/admin/component/admin-view-dealer/admin-view-dealer.component';
import { CustomerListComponent } from './module/admin/component/customer-list/customer-list.component';
import { EmployeeListComponent } from './module/admin/component/employee-list/employee-list.component';
import { CreditManagerComponent } from './module/credit-manager/credit-manager.component';
import { MailSendComponent } from './module/credit-manager/mail-send/mail-send.component';
import { SanctionLetterComponent } from './module/credit-manager/sanction-letter/sanction-letter.component';
import { SanctionListComponent } from './module/credit-manager/sanction-list/sanction-list.component';
import { DisbursmentComponent } from './module/disbursment/disbursment.component';
import { SendMoneyComponent } from './module/disbursment/send-money/send-money.component';

import { ViewDealerComponent }  from './module/disbursment/view-dealer/view-dealer.component';
import { AddLedgerComponent } from './module/ledger/add-ledger/add-ledger.component';
import { LedgerComponent } from './module/ledger/ledger.component';
import { ViewLedgerComponent } from './module/ledger/view-ledger/view-ledger.component';
import { CibilCheckComponent } from './module/operation-executive/cibil-check/cibil-check.component';
import { OperationExecutiveComponent } from './module/operation-executive/operation-executive.component';
import { VerifyDocumentsComponent } from './module/operation-executive/verify-documents/verify-documents.component';
import { AddCustomerComponent } from './module/relation-executive/add-customer/add-customer.component';
import { RelationExecutiveComponent } from './module/relation-executive/relation-executive.component';
import { ViewCustomerComponent } from './module/relation-executive/view-customer/view-customer.component';
import { RouterGauardServiceService } from './service/RouterGauardService/router-gauard-service.service';
import { EmiCalculatorComponent } from './share/emi-calculator/emi-calculator.component';
import { HomeComponent } from './share/home/home.component';
import { LoginComponent } from './share/login/login.component';
import { LogoutComponent } from './share/logout/logout.component';
import { OffersComponent } from './share/offers/offers.component';
import { ProcessToApplyComponent } from './share/process-to-apply/process-to-apply.component';


const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,},
  {path:'processtoapply',component:ProcessToApplyComponent},
  {path:'emicalculator',component:EmiCalculatorComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'offers',component:OffersComponent},

  {
    path:"relationexecutive", component:RelationExecutiveComponent,
    children:[
      
      {path:"addcustomer", component:AddCustomerComponent,canActivate:[RouterGauardServiceService]},
      {path:"viewcustomer", component:ViewCustomerComponent,canActivate:[RouterGauardServiceService]}
    ]
  },
  

  {
    path:"operationexecutive", component:OperationExecutiveComponent,
      children:[
      {path:"cibilcheck", component:CibilCheckComponent,canActivate:[RouterGauardServiceService]},
      {path:"verifydocuments", component:VerifyDocumentsComponent,canActivate:[RouterGauardServiceService]}
    ]
  },

  {
    path:"admin", component:AdminComponent,
      children:[
      {path:"adddealer", component:AddDealerComponent,canActivate:[RouterGauardServiceService]},
      {path:"addemployee", component:AddEmployeeComponent,canActivate:[RouterGauardServiceService]},
      {path:"customerlist", component:CustomerListComponent,canActivate:[RouterGauardServiceService]},
      {path:"employeelist", component:EmployeeListComponent,canActivate:[RouterGauardServiceService]},
      {path:"viewdealers", component:AdminViewDealerComponent,canActivate:[RouterGauardServiceService]},
    ]
  },
  
  {
    path:"creditmanager", component:CreditManagerComponent,
      children:[
      {path:"sanctionletter", component:SanctionLetterComponent},
      {path:"sanctionlist", component:SanctionListComponent},
      {path:"mail-send", component:MailSendComponent}
    
    ]
  },
 
  {
    path:"disbursment", component:DisbursmentComponent,
      children:[
      {path:"viewdealer", component:ViewDealerComponent},
      {path:"sendmoney", component:SendMoneyComponent}
    
    ]
  },
  {
    path:"ledger", component:LedgerComponent,
      children:[
      {path:"viewledger", component:ViewLedgerComponent},
      {path:"addledger", component:AddLedgerComponent},
        {path:"addledger", component:AddLedgerComponent}
    
    ]
  },

  


  


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
