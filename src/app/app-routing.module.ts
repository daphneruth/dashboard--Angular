import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/products.component';
import { PurchasesComponent } from './modules/purchases/purchases.component';
import { CategoriesComponent } from './modules/categories/categories.component';
//import { DepartmentsComponent } from './modules/departments/departments.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent,
  }, {
   path: 'products',
   component:ProductsComponent
  },
  {
    path: 'purchases',
    component:PurchasesComponent
   },
   {
    path: 'categories',
    component:CategoriesComponent
   },
   {
    path: 'departments',
    component:DashboardComponent
   }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  