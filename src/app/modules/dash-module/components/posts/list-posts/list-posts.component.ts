import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/constants/routes.constant';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  public appRoutes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
