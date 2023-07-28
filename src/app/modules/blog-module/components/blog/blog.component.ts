import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { IResponsePageable } from 'src/app/shared/interfaces/response-pageable.interface';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Location } from '@angular/common';
import { routes } from 'src/app/shared/constants/routes.constant';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public isLoading: boolean = true;

  public currentPage: number = 1
  public totalItems: number = 0;
  public itemsPerPage: number = 10;
  public posts: Array<IPost> = [];

  get searchPost(): IPost {
    const searchPost = {} as IPost;
    return searchPost;
  }

  constructor(
    private location: Location,
    private postsService: PostsService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getPosts(this.currentPage, this.searchPost)
      .subscribe({
        next: (posts: IResponsePageable<Array<IPost>>) => {
          this.posts = posts.data;
          this.totalItems = posts.total;
          this.itemsPerPage = posts.per_page;
        },
        error: () => this.isLoading = false,
        complete: () => this.isLoading = false,
      });
  }

  isMobileDevice(): boolean {
    return this.utilitiesService.isMobileDevice();
  }

  getPlainText(value: string): string {
    return this.utilitiesService.getPlainText(value);
  }

  getPostLink(post: IPost): string {
    const route = routes.blog.post
      .replace('{slug}', post.slug);

    return this.location.prepareExternalUrl(route);
  }

  pageChange(page: number) {
    this.currentPage = page;
    this.loadPosts();
  }

}
