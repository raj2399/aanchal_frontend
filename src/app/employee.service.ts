import { Injectable } from '@angular/core';
//import { HttpClient,HttpHeaders } from '../../node_modules/@angular/common/http';
//import { HttpClient,HttpHeaders } from '../../node_modules/@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { employee } from './classes/employee_class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee1:"http://localhost:3000/employee/"

  constructor(private _http:HttpClient) { }
  getAllEmployee()
  {
    return this._http.get(this.employee1);
  }
  addEmployee(item:employee)
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.employee1,body,{headers:_abc});
  }

}
