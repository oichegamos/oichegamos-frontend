import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardComponent } from './modules/dash-module/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/dash-module/components/login/login.component';
import { DashboardAuthGuard } from './modules/dash-module/guards/dashboard-auth.guard';
import { LogoutComponent } from './modules/dash-module/components/logout/logout.component';
import { ListPostsComponent } from './modules/dash-module/components/posts/list-posts/list-posts.component';
import { EditPostComponent } from './modules/dash-module/components/posts/edit-post/edit-post.component';
import { BlogComponent } from './modules/blog-module/components/blog/blog.component';
import { PostComponent } from './modules/blog-module/components/post/post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'blog',
    pathMatch: 'full',
    component: BlogComponent,
  },
  {
    path: 'blog/:slug',
    pathMatch: 'full',
    component: PostComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [DashboardAuthGuard],
  },
  {
    path: 'dash/posts',
    pathMatch: 'full',
    component: ListPostsComponent,
    canActivate: [DashboardAuthGuard],
  },
  {
    path: 'dash/posts/new',
    pathMatch: 'full',
    component: EditPostComponent,
    canActivate: [DashboardAuthGuard],
  },
  {
    path: 'dash/posts/edit/:slug',
    pathMatch: 'full',
    component: EditPostComponent,
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
