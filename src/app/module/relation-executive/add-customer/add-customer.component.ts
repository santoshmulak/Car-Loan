import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  reader: any;

  constructor(public fb: FormBuilder,private service:CommonService,
   
    private router: Router) { }


  selectedaadharCard: any;
  selectedpanCard: any;
  selectedpassport: any;
  selectedsalarySlip: any;
  selectedsign: any;
  selectedbankDetails: any;
  regform: FormGroup;

  imageSrc1: any;
  imageSrc2: any;
  imageSrc3: any;
  imageSrc4: any;
  imageSrc5: any;
  imageSrc6: any;

  ngOnInit(): void {


    this.regform = this.fb.group({
      firstName: [],
      lastName: [],
      dob: [],
      gender: [],
      age: [],
      email: [],
      mobileNumber: [],
      adharCardNumber: [],
      panNumber: [],
      education: [],
      presentEmployer: [],
      occupation: [],
      loanStatus: [],
      nationality: [],
      cibilScore: [],
      documentStatus: [],
      currentAddress: this.fb.group({
        areaName: [],
        cityName: [],
        district: [],
        stateName: [],
        pincode: [],

      }),
      permanantAddress: this.fb.group({
        areaName: [],
        cityName: [],
        district: [],
        stateName: [],
        pincode: [],
      }),
      bank: this.fb.group({
        cAccountNo: [],
        ifsccode: [],
        bankName: [],
        micrCode: [],
        branchAddress: [],

      }),
      loan: this.fb.group({

        loanrequaired: [],
        tenureOfLoan: [],
        annualIntreset: [],
      }),

      vehicle: this.fb.group({

        vehicleName: [],
        vehiclePrice: [],
        vehicleModelNumber: [],
      })

    })

  }


  onselectedFile1(event: any) {

    this.selectedaadharCard = event.target.files[0];
    const file = event.target.files[0];
  
  }

  onselectedFile2(event: any) {

    this.selectedbankDetails = event.target.files[0];
    const file = event.target.files[0];
   
  }

  onselectedFile3(event: any) {
    this.selectedpanCard = event.target.files[0];
    const file = event.target.files[0];
   
   
    
  }

  onselectedFile4(event: any) {

    this.selectedpassport = event.target.files[0];
    const file = event.target.files[0];
   
  }

  onselectedFile5(event: any) {

    this.selectedsalarySlip = event.target.files[0];
    const file = event.target.files[0];
  
  }
  onselectedFile6(event: any) {

    this.selectedsign = event.target.files[0];
    const file = event.target.files[0];
    
  }
  copyCurrentAddressToPermanentAddress(event) {

    if (event.target.checked) {
      this.regform.get('permanantAddress')
        .setValue(this.regform.get('currentAddress').value);

      console.log(this.regform.get(''))

    }
    else {
      this.regform.get('permanantAddress').reset();


    }

  }




  onSubmit() {
    const application1 = JSON.stringify(this.regform.value);
    // create object formdata
    const savecustomer = new FormData();
    // store file formdata
    savecustomer.append("adharCard", this.selectedaadharCard);
    savecustomer.append("passport", this.selectedpassport);
    savecustomer.append("salarySlip", this.selectedsalarySlip);
    savecustomer.append("sign", this.selectedsign);
    savecustomer.append("bankDetails", this.selectedbankDetails);
    savecustomer.append("panCard", this.selectedpanCard);


    savecustomer.append("application", application1);
    console.log("Upload Method")
    this.service.saveCustomer(savecustomer).subscribe(
      data=>{
        this.router.navigate(['relationexecutive','viewcustomer'])
      }
    );
     
    alert("Customer Register Sucessfully")
  }
  hodev: boolean = false; hodev1: boolean = false; hodev2: boolean = false; hodev3: boolean = false;
  hodev4: boolean = false; hodev5: boolean = false; hodev6: boolean = false;
  count: number = 0;
  hode() {
    this.hodev = !this.hodev;

  }
  hode1() {
    this.hodev1 = !this.hodev1;
  }
  hode2() {
    this.hodev2 = !this.hodev2;
  }
  hode3() {
    this.hodev3 = !this.hodev3;
  }
  hode4() {
    this.hodev4 = !this.hodev4;
  }

  hode5() {
    this.hodev5 = !this.hodev5;
  }
  hode6() {
    this.hodev6 = this.hodev6;
  }



}
