import { Location } from '@angular/common';
import { PostsService } from './../../../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private location: Location,
    private postsService: PostsService,
  ) { }

  public post: IPost = {} as IPost;
  public isLoading: boolean = true;
  public postNotFound: boolean = false;

  public get postSlug(): string {
    const pathSplited = this.location.path().split('/');
    return pathSplited[pathSplited.length - 1];
  }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(): void {
    this.postsService.getPostBySlug(this.postSlug)
      .subscribe({
        next: (post: IPost) => this.post = post,
        error: err => this.postNotFound = true,
        complete: () => this.isLoading = false
      });
  }

}
