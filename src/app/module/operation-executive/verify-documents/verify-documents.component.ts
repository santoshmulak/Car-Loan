import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/model/application';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-verify-documents',
  templateUrl: './verify-documents.component.html',
  styleUrls: ['./verify-documents.component.css']
})
export class VerifyDocumentsComponent implements OnInit {
  constructor(private service:CommonService) { }

  verifyDocument:Application[];
   
   applications:Observable<any>;
    ngOnInit(): void {
     this.getDocument()
    }
    
  
      //Gets called when the user clicks on retieve image button to get the image from back end
      getDocument() {
      //Make a call to Sprinf Boot to get the Image Bytes.
       this.service.verifyDocument().subscribe(
         data =>{
           this.verifyDocument=data;
           console.log(this.verifyDocument)
         }
       );
         
    }
    acceptDocument(document){
     
      document.documentStatus='Acceped'
       
        this.service.updateApplication(document.customerId,document).subscribe();
        console.log('updated customer  '+ document.documentStatus)
        alert('Document Approved successfully')
    }
    rejectDocument(document){
      alert("Document Rejected")
  
      document.documentStatus='Rejected';
       
        this.service.updateApplication(document.customerId,document).subscribe()
        console.log('updated customer'+ document.documentStatus)
        alert('Document Rejected ')
    }
}
