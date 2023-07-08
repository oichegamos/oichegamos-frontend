import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
  ]
})
export class DashModule { }
