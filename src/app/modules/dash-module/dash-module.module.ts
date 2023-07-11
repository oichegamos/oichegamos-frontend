import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    DashNavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    DashNavbarComponent,
    RouterModule,
  ],
})
export class DashModule { }
