import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { employee } from '../../classes/employee_class';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
   Email_id:string;
   Password:string;
  Name:string;
  Mobile_no:string;
   Address:string;
   DOB:string;
   Salary:string="5000";
   Employee_type:number=1;
  emp_arr:employee[]=[];
  joining_date:string="10/10/1999";

  constructor(private _empser:EmployeeService) { }

  ngOnInit() {
  }
  onsignup()
  {
    console.log(this.Email_id,this.Password,this.Name,this.Mobile_no,this.Address,this.DOB,this.Salary,this.joining_date,this.Employee_type);

    this._empser.addEmployee(new employee(this.Email_id,this.Password,this.Name,this.Mobile_no,this.Address,this.DOB,this.Salary,this.joining_date,this.Employee_type)).subscribe(
      (data:any[])=>{
        console.log(data);

        //this._route.navigate(['']);x
      }
      );
  }
}
