import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './Pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './Pages/dashboard2/dashboard2.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [

  {
    path: 'home',
    component: LoginComponent
  },
  {
    path: 'login',
    component: Dashboard1Component
  },
  {
    path: 'price',
    component: Dashboard2Component
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
