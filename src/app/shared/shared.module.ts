import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    UploadImageComponent,
    LoadingComponent,
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
    LoadingComponent,
  ]
})
export class SharedModule { }
