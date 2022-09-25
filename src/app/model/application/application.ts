import { Address } from "../address/address";
import { Documents } from "../documents/documents";
import { Loandetails } from "../loandetails/loandetails";

export class Application {


    public customerId:number;
	public  firstName:string;
	public  lastName:string;
    public  email:string;
    public  mobileNumber:number;
	public  loanStatus:string;
    public adharCardNumber:Number;
    public  panNumber:string;
    public cibilScore:number;
    public  documentStatus:string;
    public  document:Documents;
    public loan:Loandetails;
    public currentAddress:Address;
}
