import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Mydashboard/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './Mydashboard/main/main.component';
import {MatCardModule} from '@angular/material/card';
import { NgApexchartsModule } from "ng-apexcharts";
import { LinechartComponent } from './Mydashboard/linechart/linechart.component';
import { DoublelinesComponent } from './Mydashboard/doublelines/doublelines.component';
import { DonutComponent } from './Mydashboard/donut/donut.component';
import { LinecolumnComponent } from './Mydashboard/linecolumn/linecolumn.component';
import { RadialComponent } from './Mydashboard/radial/radial.component';
import { TreeComponent } from './Mydashboard/tree/tree.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoginpageComponent } from './MyDashboard/loginpage/loginpage.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    LinechartComponent,
    DoublelinesComponent,
    DonutComponent,
    LinecolumnComponent,
    RadialComponent,
    TreeComponent,
    LoginpageComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    NgApexchartsModule,
    FullCalendarModule
   
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
