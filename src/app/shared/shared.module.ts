import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import{MatListModule}from "@angular/material/list";

import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component'
import { HighchartsChartModule } from 'highcharts-angular';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]
  ,
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    RouterModule,
    MatListModule,
    HighchartsChartModule
  
    
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]

})
export class SharedModule { 

}
