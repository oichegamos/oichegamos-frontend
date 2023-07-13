import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/constants/routes.constant';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IResponsePageable } from 'src/app/shared/interfaces/response-pageable.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  public appRoutes = routes;

  public currentPage: number = 1
  public totalItems: number = 0;
  public itemsPerPage: number = 10;

  public searchTerm: string = '';
  public posts: Array<IPost> = [];

  constructor(
    private location: Location,
    private postsService: PostsService,
    private router: Router,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts()
      .subscribe(
        (posts: IResponsePageable<Array<IPost>>) => {
          this.posts = posts.data;
          this.totalItems = posts.total;
          this.itemsPerPage = posts.per_page;
        }
      );
  }

  pageChange(page: number) {
    this.currentPage = page;
    this.loadPosts();
  }

  getPostDescription(post: IPost): string {
    if (!post || !post.content) {
      return '';
    }

    const plainText = this.utilitiesService.getPlainText(post.content);
    return this.utilitiesService.getFiftyChars(plainText);
  }

  newPost(): void {
    this.router.navigate([this.appRoutes.dashboard.posts.createPost]);
  }

  editPost(post: IPost): void {
    const route = this.appRoutes.dashboard.posts.editPost
      .replace('{slug}', post.slug);

    this.router.navigate([route]);
  }

  deletePost(post: IPost): void {
    console.log('delete post here')
  }

  openPostLink(post: IPost): void {
    if (!post || !post.slug) {
      return;
    }

    const route = this.appRoutes.blog.post
      .replace('{slug}', post.slug);

    const url = this.location.prepareExternalUrl(route);
    window.open(url, '_blank');
  }

  isMobileDevice(): boolean {
    return this.utilitiesService.isMobileDevice();
  }

}
