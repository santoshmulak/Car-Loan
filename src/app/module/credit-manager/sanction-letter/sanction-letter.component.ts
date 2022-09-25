import { Component, OnInit } from '@angular/core';


import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  

import { Application } from 'src/app/model/application/application';

import { CommonService } from 'src/app/service/common/common.service';


pdfMake.vfs = pdfFonts.pdfMake.vfs;   

class Invoice{
  customerName: string;
  address: string;
  contactNo: number;
  email: string;
  intrest: number;
  sanamount:number;
  LoanAmount:number;
  additionalDetails: string;
}
@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent implements OnInit {
  app:Application;
  constructor(private service:CommonService) { }
  ngOnInit(): void {
   
  }

  cid:number;

submit()
{
 this.app=this.service.app;
 this.invoice =new Invoice();
 this.invoice.customerName=this.app.firstName+" "+this.app.lastName;
 this.invoice.email=this.app.email;
 this.invoice.address=this.app.currentAddress.areaName+" "+this.app.currentAddress.cityName
 +" "+this.app.currentAddress.district+" "+this.app.currentAddress.pincode;
 this.invoice.contactNo=this.app.mobileNumber;
 this.invoice.intrest=this.app.loan.annualIntreset;
 this.invoice.LoanAmount=this.app.loan.loanrequaired;
 this.invoice.additionalDetails='dear customer pay loan on time your regards genious car loan .....!' 

}
invoice = new Invoice();
generatePDF(action = 'open') {
 let docDefinition = {
   watermark: { text: 'Nishant Finance', color: 'black', opacity: 0.2, bold: false, italics: false },
   content: [
     {
       text: 'Nishant Finance',
       fontSize: 16,
       alignment: 'center',
       color: '#047886'
     },
     {
       text: 'Loan Sanction Letter',
       fontSize: 20,
       bold: true,
       alignment: 'center',
       decoration: 'underline',
       color: 'skyblue'
     },
     {
       text: 'Customer Details',
       style: 'sectionHeader'
     },
     {
       columns: [
         [{
           text: this.invoice.customerName,
           bold:true
         },
         { text: this.invoice.address },
         { text: this.invoice.email },
         { text: this.invoice.contactNo}
         ],
         [
           {
             text: `Date: ${new Date().toLocaleString()}`,
             alignment: 'right'
           },
           { 
             text: `Loan No : ${((Math.random() *10000).toFixed(0))}`,
             alignment: 'right'
           }
         ]
       ]
     },
     {
       text: 'Car Loan Details',
       style: 'sectionHeader'
     },
     {
       text:'Dear Customer,\n'+"              '"+this.invoice.customerName +"' Your loan is aproved Amount is "+this.invoice.LoanAmount+'\n'+
       'At interest rate is '+this.invoice.intrest+'%' +' Please sign Contract for further process. Thank You !\n\n '
       +'Regards,\n'+'Nishant Finance family\n\n\n\n'
     },
     {
       text: 'Additional Details',
       style: 'sectionHeader'
     },
     {
         text:this.invoice.additionalDetails+'\n\n\n',
         margin: [0, 0 ,0, 15]          
     },
     {
       columns: [
         [{ qr: `${this.invoice.customerName}`, fit: '50' }],
         [{ text: 'Signature\n\n', alignment:'right', italics: true}],
       ]
     },
     {
       text: 'Terms and Conditions',
       style: 'sectionHeader'
     },
     {
         ul: [
           'Please sign Contract in max 10 days.',
           'Interest rate of the Loan will be subject to the Company terms and conditions.',
           'This is system generated Sanction letter.',
         ],
     }
   ],
   styles: {
     sectionHeader: {
       bold: true,
       decoration: 'underline',
       fontSize: 14,
       margin: [0, 15,0, 15]          
     }
   }
 };
 if(action==='download'){
   pdfMake.createPdf(docDefinition).download();
 }else if(action === 'print'){
   pdfMake.createPdf(docDefinition).print();      
 }else{
   pdfMake.createPdf(docDefinition).open();      
 }
}
}
