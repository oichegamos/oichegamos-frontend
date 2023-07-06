import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPostsComponent } from './components/last-posts/last-posts.component';
import { OurStatusComponent } from './components/our-status/our-status.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    LastPostsComponent,
    OurStatusComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LastPostsComponent,
    OurStatusComponent,
    AboutUsComponent,
  ]
})
export class HomeModule { }
