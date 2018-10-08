import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { FormsModule } from '@angular/forms';
import { MatCardModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatMenuModule
   } from '@angular/material';
   import { MatFormFieldModule } from "@angular/material/form-field";
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import {MatIconModule} from '@angular/material/icon';
import { SupplierDetailsComponent } from './Supplier/supplier-details/supplier-details.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './Supplier/update-supplier/update-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductHomeComponent,
    SupplierDetailsComponent,
    AddSupplierComponent,
    UpdateSupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,

    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
