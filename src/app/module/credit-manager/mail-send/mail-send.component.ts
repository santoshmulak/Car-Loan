import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-mail-send',
  templateUrl: './mail-send.component.html',
  styleUrls: ['./mail-send.component.css']
})
export class MailSendComponent implements OnInit {

  sendEmail:FormGroup;
  constructor(public fb:FormBuilder,public commonservice:CommonService) { }

  ngOnInit(): void {
    this.sendEmail=this.fb.group({
      toEmail:'',
      // subject:'',
      // textMessage:''

    })
  }
  selectedAttachfile: any;
  onselectedFile1(event: any) {

    this.selectedAttachfile= event.target.files[0];
  }
  
  sendEmailCall()
  {
    const application1 = JSON.stringify(this.sendEmail.value);
    //alert(application1)

    const uploadDocument = new FormData();
    
    uploadDocument.append("Attachfile",this.selectedAttachfile)
    uploadDocument.append("toEmail", application1);

    this.commonservice.sendEmails(uploadDocument).subscribe() 

  }

}
