import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill } from '../classes/Bill_class'

@Injectable({
  providedIn: 'root'
})

export class BillService {
  public bill_url:"http://localhost:3000/bill/";
  constructor(private _http:HttpClient) { }

  GetAllBill()
  {
      return this._http.get(this.bill_url);
  }
}
