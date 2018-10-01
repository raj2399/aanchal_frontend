import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private url='http://localhost:3000/supplier/';
  constructor(private _http:HttpClient) { }
  getAllSupplier(){
    return this._http.get(this.url);
  }
}
