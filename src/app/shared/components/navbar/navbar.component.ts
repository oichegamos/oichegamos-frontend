import { Component, OnInit } from '@angular/core';
import { routes } from '../../constants/routes.constant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public appRoutes = routes;
  // public isPostPage: boolean = false;

  get isPostPage(): boolean {
    return this.location.path().includes(this.appRoutes.blog.home)
  }

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

}
