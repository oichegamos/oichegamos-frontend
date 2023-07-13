import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IImage } from '../interfaces/image.interface';
import { environment } from 'src/environments/environment';
import { endpoints } from '../constants/endpoints.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  uploadImage(base64Image: string, description: string = ''): Observable<IImage> {
    const endpoint = this.baseUrl + endpoints.images;

    const formData: FormData = new FormData();
    formData.append('image', base64Image);
    formData.append('description', description);

    return this.http.post<IImage>(endpoint, formData);
  }
}
