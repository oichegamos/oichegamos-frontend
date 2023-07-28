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

  getPosts(page: number, searchPost: IPost): Observable<IResponsePageable<Array<IPost>>> {
    let endpoint = this.baseUrl + endpoints.posts + `?page=${page}`;

    Object.keys(searchPost).forEach((field: string) => {
      const value = searchPost[field];

      endpoint = `${endpoint}&${field}=${value}`;
    });

    return this.http
      .get<IResponsePageable<Array<IPost>>>(endpoint);
  }

  getPostBySlug(slug: string): Observable<IPost> {
    const endpoint = this.baseUrl + endpoints.postBySlug
      .replace('{slug}', slug);

    return this.http.get<IPost>(endpoint);
  }

  createPost(post: IPost): Observable<IPost> {
    const endpoint = this.baseUrl + endpoints.posts;

    return this.http.post<IPost>(endpoint, post);
  }

  updatePost(post: IPost): Observable<IPost> {
    const endpoint = this.baseUrl + `${endpoints.posts}/${post.id}`;

    return this.http.put<IPost>(endpoint, post);
  }
}
