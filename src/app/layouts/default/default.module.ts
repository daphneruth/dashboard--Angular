import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import{  MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider';
//import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import{ MatCardModule} from '@angular/material/card'
//import { DashboardService } from 'src/app/modules/dashboard.service';
import { CategoriesComponent } from 'src/app/modules/categories/categories.component';
import { PurchasesComponent } from 'src/app/modules/purchases/purchases.component';
import { DepartmentsComponent } from 'src/app/modules/departments/departments.component';







@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PurchasesComponent,
    DashboardComponent
    
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
    MatPaginatorModule
  
  ],
  // providers: [
  //   DashboardService
  // ]

})
export class DefaultModule { }
