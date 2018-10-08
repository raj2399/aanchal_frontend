import { Routes,RouterModule } from '@angular/router';
import { UpdateSupplierComponent } from "./Supplier/update-supplier/update-supplier.component";
import { SupplierDetailsComponent } from "./Supplier/supplier-details/supplier-details.component";
const arr:Routes=[
  {path:'',component:SupplierDetailsComponent},
  {path:'updatesup/:Supplier_id',component:UpdateSupplierComponent}
];


export const routing=RouterModule.forRoot(arr);
