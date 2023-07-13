import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { UploadImageComponent } from './components/upload-image/upload-image.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    UploadImageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    RouterModule,
    UploadImageComponent,
  ]
})
export class SharedModule { }
