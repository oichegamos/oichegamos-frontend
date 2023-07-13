import { Editor } from 'ngx-editor';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/constants/routes.constant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public appRoutes = routes;

  public post: IPost = {} as IPost;
  public isLoading: boolean = true;

  public editor: Editor = new Editor();

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
    private postsService: PostsService,
    private router: Router,
  ) {
    if (!this.isEditing) {
      this.post.content = '';
    }
  }

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

  backToList() {
    this.router.navigate([this.appRoutes.dashboard.posts.listPosts]);
  }

  savePost() {
    this.isLoading = true;

    console.log(this.post)

    const serviceMethod: Observable<IPost> = this.isEditing
      ? this.postsService.updatePost(this.post)
      : this.postsService.createPost(this.post);

    serviceMethod.subscribe({
      next: (post: IPost) => {
        this.backToList();
      },
      error: err => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }



}
