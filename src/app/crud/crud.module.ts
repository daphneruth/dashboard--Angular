import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases/purchases.component';
import { ProductsComponent } from './products/products.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    PurchasesComponent,
    ProductsComponent,
    DepartmentsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }
