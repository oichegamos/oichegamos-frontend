import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponsePageable } from '../interfaces/response-pageable.interface';
import { IPost } from '../interfaces/post.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../constants/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<IResponsePageable<Array<IPost>>> {
    const endpoint = this.baseUrl + endpoints.posts;

    return this.http
      .get<IResponsePageable<Array<IPost>>>(endpoint);
  }

  getPostBySlug(slug: string): Observable<IPost> {
    const endpoint = this.baseUrl + endpoints.postBySlug
      .replace('{slug}', slug);

    return this.http.get<IPost>(endpoint);
  }
}
