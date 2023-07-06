import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPostsComponent } from './components/last-posts/last-posts.component';
import { OurStatusComponent } from './components/our-status/our-status.component';



@NgModule({
  declarations: [
    LastPostsComponent,
    OurStatusComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LastPostsComponent,
    OurStatusComponent,
  ]
})
export class HomeModule { }
