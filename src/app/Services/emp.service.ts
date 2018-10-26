import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { employee } from '../classes/employee_class';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
public emp_url:"http://localhost:3000/employee/";

  constructor(private _http:HttpClient) { }
  GetAllEmployee()
  {
    return this._http.get(this.emp_url);
  }

}
