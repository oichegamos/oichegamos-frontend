import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';
import { environment } from 'src/environments/environment';
import { endpoints } from '../constants/endpoints.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Array<ICategory>> {
    const endpoint = this.baseUrl + endpoints.categories + '?paginate=false';

    return this.http.get<Array<ICategory>>(endpoint);
  }
}
