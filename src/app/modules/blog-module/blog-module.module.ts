import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    BlogComponent,
    PostComponent,
  ]
})
export class BlogModule { }
