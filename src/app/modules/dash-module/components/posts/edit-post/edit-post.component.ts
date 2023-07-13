import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public post: IPost = {} as IPost;
  public isLoading: boolean = true;

  public get isEditing(): boolean {
    return this.location.path().includes('edit');
  }

  public get postSlug(): string {
    if (!this.isEditing) {
      return '';
    }

    const pathSplited = this.location.path().split('/');
    return pathSplited[pathSplited.length - 1];
  }

  public get pageTitle(): string {
    if (!this.isEditing) {
      return 'Criando post para o blog';
    }

    return `Editando post ${this.post.title}`;
  }

  constructor(
    private location: Location,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    if (this.isEditing) {
      this.loadPost();
    }
    else {
      this.isLoading = false;
    }
  }

  loadPost(): void {
    this.postsService.getPostBySlug(this.postSlug)
      .subscribe(
        (post: IPost) => {
          this.post = post;
          this.isLoading = false;
        }
      );
  }



}
