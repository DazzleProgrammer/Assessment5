import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
    
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    redirectTo:'', 
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    
  },
  {
    path:'pricing',
    component:PricingComponent,
    
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
