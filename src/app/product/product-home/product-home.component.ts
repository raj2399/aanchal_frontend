import { Component, OnInit,ViewChild } from '@angular/core';
import {PageEvent,MatPaginator} from '@angular/material';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { product } from '../../classes/product_class';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ProductService } from '../../Services/product.service';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  arr:product[]=[];
  delarr:product[]=[];

  length = 100;
  pageSize = 10;
  selection = new SelectionModel(true, []);

  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageEvent: PageEvent;
  displayedColumns: string[] = ['Action1','Product_name', 'Product_price','Fk_category_name','Action'];
  constructor(private _get:ProductService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;

    this.dataSource.sort = this.sort;
    this._get.getAllProduct().subscribe(
      (data:product[])=>{
        this.arr=data ;
        console.log(this.arr);
        this.dataSource.data=this.arr;
      }
    );
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  chacked(item:product){
    if(this.delarr.find(x=>x==item))
    {
    this.delarr.splice(this.delarr.indexOf(item),1)
    }
    else{
    this.delarr.push(item);
    }
    console.log(this.delarr);
    }
    i:number=0;

    delete(){
      this._get.deleteAll(this.delarr).subscribe(

      (data:any)=>{

        console.log(data);
      for(this.i=0;this.i<this.delarr.length;this.i++)
      {
      if(this.arr.find(x=>x==this.delarr[this.i]))
      {
      this.arr.splice(this.arr.indexOf(this.delarr[this.i]),1);
      }
      }
      this.dataSource.data=this.arr;
      }
      );
      }


}
