import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
  ]
})
export class DashModule { }
