import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardComponent } from './modules/dash-module/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/dash-module/components/login/login.component';
import { DashboardAuthGuard } from './modules/dash-module/guards/dashboard-auth.guard';
import { LogoutComponent } from './modules/dash-module/components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'dash',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [DashboardAuthGuard],
  },
  {
    path: 'dash/login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'dash/logout',
    pathMatch: 'full',
    component: LogoutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DashboardAuthGuard]
})
export class AppRoutingModule { }
