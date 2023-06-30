import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPostsComponent } from './components/last-posts/last-posts.component';
import { OurNumbersComponent } from './components/our-numbers/our-numbers.component';



@NgModule({
  declarations: [
    LastPostsComponent,
    OurNumbersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LastPostsComponent,
    OurNumbersComponent,
  ]
})
export class HomeModule { }
