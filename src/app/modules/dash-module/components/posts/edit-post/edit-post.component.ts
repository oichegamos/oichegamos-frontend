import { Editor } from 'ngx-editor';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/constants/routes.constant';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { IImage } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public appRoutes = routes;

  public categories: Array<ICategory> = [];
  public post: IPost = {} as IPost;
  public isLoading: boolean = true;

  public editor: Editor = new Editor();

  public postImage = '';

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
    private categoriesService: CategoriesService,
    private location: Location,
    private postsService: PostsService,
    private router: Router,
  ) {
    this.initializePost();
  }

  ngOnInit(): void {
    this.loadPost();
    this.loadCategories();
  }

  initializePost(): void {
    const post = {} as IPost;
    post.category = {} as ICategory;
    post.category.id = 0;
    post.image = {} as IImage;
    post.content = '';

    this.post = post;
  }

  loadPost(): void {
    if (!this.isEditing) {
      return;
    }

    this.postsService.getPostBySlug(this.postSlug)
      .subscribe(
        (post: IPost) => {
          this.post = post;
          this.isLoading = false;
        }
      );

  }

  loadCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(
        (categories: Array<ICategory>) => {
          this.categories = categories;
        }
      )
  }

  backToList() {
    this.router.navigate([this.appRoutes.dashboard.posts.listPosts]);
  }

  setImage(image: IImage) {
    this.post.image = image;
  }

  savePost() {
    this.isLoading = true;

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

  imageSelected(fileInput: any): void {
    console.log(fileInput);

    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;

        image.onload = rs => {
          const base64Image = e.target.result;

          console.log(`image: ${base64Image}`);
        }
      }

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }


}
