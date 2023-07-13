import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPostsComponent } from './components/last-posts/last-posts.component';
import { OurStatusComponent } from './components/our-status/our-status.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NgxEditorModule } from 'ngx-editor';



@NgModule({
  declarations: [
    HomeComponent,
    LastPostsComponent,
    OurStatusComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    LastPostsComponent,
    OurStatusComponent,
    AboutUsComponent,
  ]
})
export class HomeModule { }
