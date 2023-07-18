import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import{  MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import{ MatCardModule} from '@angular/material/card'
import { CategoriesComponent } from 'src/app/modules/categories/categories.component';
import { PurchasesComponent } from 'src/app/modules/purchases/purchases.component';
import { DepartmentsComponent } from 'src/app/modules/departments/departments.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PurchasesComponent,
    DashboardComponent,
    DepartmentsComponent
    
  ],
  imports: [
  
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SharedModule,
    RouterModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
    
    
  
  ],
  // providers: [
  //   DashboardService
  // ]

})
export class DefaultModule { }
