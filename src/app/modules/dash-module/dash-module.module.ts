import { NgxEditorModule } from 'ngx-editor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/posts/list-posts/list-posts.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    DashNavbarComponent,
    ListPostsComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule,
    NgxEditorModule,
    NgSelectModule,
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    DashNavbarComponent,
    RouterModule,
    ListPostsComponent,
    EditPostComponent,
  ],
})
export class DashModule { }
