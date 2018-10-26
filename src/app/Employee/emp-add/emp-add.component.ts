import { Component, OnInit } from '@angular/core';

import { MatDatepicker } from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { employee } from '../../classes/employee_class';
import { EmployeeService } from '../../employee.service';
import { EmpService } from '../../Services/emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  Email_id:string;
  Password:string;
 Name:string;
 Mobile_no:string;
  Address:string;
  DOB:string="10/10/1999";
  Salary:string="5000";
  Employee_type:number=1;
 emp_arr:employee[]=[];
 joining_date:string="10/10/1999";

  constructor(private empser:EmpService) { }

  ngOnInit() {
    this.empser.GetAllEmployee().subscribe(
    (data:any)=>{
      console.log(data);
    }
    );
  }


//   onsignup()
//   {
//     console.log(this.Email_id,this.Password,this.Name,this.Mobile_no,this.Address,this.DOB,this.Salary,this.joining_date,this.Employee_type);

//     this.empser.addEmployee(new employee(this.Email_id,this.Password,this.Name,this.Mobile_no,this.Address,this.DOB,this.Salary,this.joining_date,this.Employee_type)).subscribe(
//       (data:any[])=>{
//         console.log(data);

//         //this._route.navigate(['']);x
//       }
//       );

// }
}
