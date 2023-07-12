import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import { HeaderComponent } from './shared/components/header/header.component';
//import { FooterComponent } from './shared/components/footer/footer.component';
//import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PostComponent } from './module/post/post.component';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';
import { PostComponent } from './modules/post/post.component';
import { ProductsComponent } from './modules/products/products.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { PurchasesComponent } from './modules/purchases/purchases.component';
import { DepartmentsComponent } from './modules/departments/departments.component';
//import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ProductsComponent,
    CategoriesComponent,
    PurchasesComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
