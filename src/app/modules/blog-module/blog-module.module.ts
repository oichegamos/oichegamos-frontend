import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    BlogComponent,
    PostComponent,
  ]
})
export class BlogModule { }
