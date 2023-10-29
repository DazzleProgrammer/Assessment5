import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ThirdComponent } from './pages/third/third.component';
import { NavabrComponent } from './pages/navabr/navabr.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponentComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'third',
        component:ThirdComponent,
        pathMatch:'full'
      },{
        path:'pricing',
        component:PricingComponent,
        pathMatch:'full'
      }
    ]
  },
  {
    path:'nav',
    component:NavabrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
