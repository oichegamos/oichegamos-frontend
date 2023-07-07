import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOurStatus } from '../interfaces/our-status.interface';
import { Observable } from 'rxjs';
import { endpoints } from '../constants/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class OurStatusService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getOurStatus(): Observable<IOurStatus> {
    const endpoint = this.baseUrl + endpoints.ourStatus;

    return this.http.get<IOurStatus>(endpoint);
  }
}
