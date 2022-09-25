import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './share/home/home.component';
import { ProcessToApplyComponent } from './share/process-to-apply/process-to-apply.component';
import { EmiCalculatorComponent } from './share/emi-calculator/emi-calculator.component';
import { LoginComponent } from './share/login/login.component';
import { LogoutComponent } from './share/logout/logout.component';
import { OperationExecutiveModule } from './module/operation-executive/operation-executive.module';
import { RelationExecutiveModule } from './module/relation-executive/relation-executive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { AdminModule } from './module/admin/admin.module';
import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { DisbursmentModule } from './module/disbursment/disbursment.module';
import { LedgerModule } from './module/ledger/ledger.module';
import { OffersComponent } from './share/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProcessToApplyComponent,
    EmiCalculatorComponent,
    LoginComponent,
    LogoutComponent,
    OffersComponent,

  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    OperationExecutiveModule,
    CreditManagerModule,
    RelationExecutiveModule,
    LedgerModule,
    DisbursmentModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
