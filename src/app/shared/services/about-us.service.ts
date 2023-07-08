import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAboutUs } from '../interfaces/about-us.interface';
import { Observable } from 'rxjs';
import { endpoints } from '../constants/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAboutUs(): Observable<IAboutUs> {
    const endpoint = this.baseUrl + endpoints.aboutUs;

    return this.http.get<IAboutUs>(endpoint);
  }
}
