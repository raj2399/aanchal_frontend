import { Component, OnInit } from '@angular/core';
import { supplier } from '../../classes/supplier_class';
import { SupplierService } from '../../Services/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
Email_id:string;
Password1:string="helly@123";
Password:string;
Name:string;
Mobile_no:string;
Address:string;
arr:supplier[];
  constructor(private _http:SupplierService) { }

  ngOnInit() {
  }
    onsignup()
    {
      this._http.addSupplier(new supplier(0,this.Email_id,this.Name,this.Address,this.Password,this.Mobile_no)).subscribe(
        (data:any)=>{
          console.log(data);
                   //this._route.navigate(['']);
        }
        );

    }
}
