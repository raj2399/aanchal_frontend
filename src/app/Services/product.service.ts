import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product_class'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url='http://localhost:3000/product/';
  private delete_pro='http://localhost:3000/delete/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
  }
  addProduct(item:FormData){

    return this._http.post(this.url,item);

  }
  deleteAll(item:product[])
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.delete_pro,body,{headers:_abc});

  }

}
