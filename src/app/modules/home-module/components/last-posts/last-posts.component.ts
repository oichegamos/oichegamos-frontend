import { IResponsePageable } from './../../../../shared/interfaces/response-pageable.interface';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-last-posts',
  templateUrl: './last-posts.component.html',
  styleUrls: ['./last-posts.component.css']
})
export class LastPostsComponent implements OnInit {

  lastPosts: Array<IPost> = [];

  get lastPost(): IPost | undefined {
    if (!this.lastPosts) {
      return undefined;
    }

    return this.lastPosts[0];
  }

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.loadLastPosts();
  }

  loadLastPosts(): void {
    this.postsService.getPosts()
      .subscribe(
        (result: IResponsePageable<Array<IPost>>) => {
          this.lastPosts = result.data;
        }
      )
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 576;
  }

}
