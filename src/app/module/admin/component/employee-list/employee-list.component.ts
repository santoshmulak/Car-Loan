import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee/employee';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empservice:CommonService) { }
  emplist: Employee[];
  ngOnInit(): void {
    this.empservice.getdataEmployee().subscribe(
      list => {
        this.emplist = list
      }
        );
  }
  deleteemployee(id: number) {
    this.empservice.deleteData(id).subscribe();
    window.location.reload();
  }
  
}
