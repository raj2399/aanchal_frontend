import { Routes,RouterModule } from '@angular/router';
import { UpdateSupplierComponent } from "./Supplier/update-supplier/update-supplier.component";
import { SupplierDetailsComponent } from "./Supplier/supplier-details/supplier-details.component";
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';
import { supplier } from './classes/supplier_class';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';
const arr:Routes=[
  {path:'',component:AddEmpComponent},
  {path:'updatesup/:Supplier_id',component:UpdateSupplierComponent}
];


export const routing=RouterModule.forRoot(arr);
