import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adddealer } from 'src/app/model/adddealer/adddealer';
import { Application } from 'src/app/model/application/application';
import { Employee } from 'src/app/model/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  

  app: Application;
  constructor(private http: HttpClient) { }

  //relational exexutive url

  saveCustomer(savecustomer: any) {
    console.log('inside service')
    return this.http.post(`http://localhost:1111/api/application`, savecustomer)
  }


  retrieveAllCustomer() {
    return this.http.get<Application[]>(`http://localhost:1111/api/applications`);
  }


  
  deleteApplication(id) {
    console.log(id)
    return this.http.delete(`http://localhost:1111/api/application/${id}`);
  }

  //operationa executive 


  getApplication() {
    return this.http.get<Application[]>(`http://localhost:1111/api/applications`);
  }
  updateApplication(customerId, application) {


    console.log('Inside service ' + application.loanStatus)
    return this.http.put(`http://localhost:1111/api/application/${customerId}`, application);
  }


  verifyDocument() {
    return this.http.get<Application[]>(`http://localhost:1111/api/verifyDcument`);
  }


  // credit manager
  getAllDocumentVerifiedList() {
    return this.http.get<Application[]>(`http://localhost:1111/api/documentVerifiedlist`);
  }





  getbyid(application) {
    this.app = application;
    console.log("inside service" + this.app);
    //  return this.http.get<Application[]>(`http://localhost:1111/api/getapplication/${id}`);
  }


  sendEmails(uploadDocument: any) {
    console.log("inside service")
    return this.http.post("http://localhost:1111/mail", uploadDocument);
  }

  //
  //dealer

  saveDealer(dealer: any) {
    console.log(dealer)
    return this.http.post<Adddealer>(`http://localhost:1111/addDealer`, dealer);
  }
  getdata() {
    return this.http.get<Adddealer[]>(`http://localhost:1111/allDealer`);
  }



  //Admin


  isLoggedIn: true;


  saveEmployee(emp: Employee) {
    return this.http.post<Employee>(`http://localhost:1111/employee/addEmployee`, emp);
  }
  getdataEmployee() {
    return this.http.get<Employee[]>(`http://localhost:1111/employee/allEmployee`);
  }
  deleteData(id: number) {
    return this.http.delete(`http://localhost:1111/employee/deleteEmployee/${id}`);
  }



  
  deletedealer(id:number)
  {
    return this.http.delete(`http://localhost:1111/deleteDealer/${id}`);
  }
  //  dealer:AddDealer;
  // getdealer(dealer)
  // {
  //     this.dealer=dealer;
  // }




}
