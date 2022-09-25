import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionListComponent } from './sanction-list/sanction-list.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { CreditManagerComponent } from './credit-manager.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MailSendComponent } from './mail-send/mail-send.component';



@NgModule({
  declarations: [
    SanctionListComponent,
    SanctionLetterComponent,
    CreditManagerComponent,
    MailSendComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CreditManagerModule { }
