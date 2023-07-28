import { routes } from 'src/app/shared/constants/routes.constant';
import { IResponsePageable } from './../../../../shared/interfaces/response-pageable.interface';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-last-posts',
  templateUrl: './last-posts.component.html',
  styleUrls: ['./last-posts.component.css']
})
export class LastPostsComponent implements OnInit {

  lastPosts: Array<IPost> = [];

  get lastPost(): IPost {
    return this.lastPosts ? this.lastPosts[0] : {} as IPost;
  }

  constructor(
    private location: Location,
    private postsService: PostsService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.loadLastPosts();
  }

  loadLastPosts(): void {
    const searchPost = {} as IPost;

    this.postsService.getPosts(1, searchPost)
      .subscribe(
        (result: IResponsePageable<Array<IPost>>) => {
          this.lastPosts = result.data;
        }
      )
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

}
