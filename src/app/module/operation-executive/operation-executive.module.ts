import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationExecutiveComponent } from './operation-executive.component';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import { VerifyDocumentsComponent } from './verify-documents/verify-documents.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OperationExecutiveComponent,
    CibilCheckComponent,
    VerifyDocumentsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OperationExecutiveModule { }
