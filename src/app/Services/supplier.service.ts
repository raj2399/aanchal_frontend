import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { supplier } from '../classes/supplier_class';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private url='http://localhost:3000/supplier/';
  private delete='http://localhost:3000/delete_supplier/';
  constructor(private _http:HttpClient) { }
  getAllSupplier(){
    return this._http.get(this.url);
  }
  addSupplier(item:supplier){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
}
deleteMultiSupplier(item:supplier[])
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.delete,body,{headers:_abc});


  }
  deleteSupplier(item:supplier){

    console.log(item.Supplier_id);
    return this._http.delete(this.url+item.Supplier_id);
  }

}
