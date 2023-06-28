import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPostsComponent } from './components/last-posts/last-posts.component';



@NgModule({
  declarations: [
    LastPostsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LastPostsComponent,
  ]
})
export class HomeModule { }
