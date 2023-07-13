import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IImage } from '../../interfaces/image.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  @Output() onImageUploaded = new EventEmitter<IImage>();

  constructor(
    private imagesService: ImagesService,
  ) { }

  ngOnInit(): void {
  }

  imageSelected(fileInput: any): void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;

        image.onload = rs => {
          const base64Image: string = e.target.result;

          this.imagesService.uploadImage(base64Image)
            .subscribe(
              (image: IImage) => {
                this.onImageUploaded.emit(image);
              }
            );
        }
      }

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
