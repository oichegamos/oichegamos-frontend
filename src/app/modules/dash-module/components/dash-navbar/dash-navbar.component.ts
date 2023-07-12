import { routes } from 'src/app/shared/constants/routes.constant';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.css']
})
export class DashNavbarComponent implements OnInit {

  public appRoutes = routes;

  @Input() pageName: string = 'Home';

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  areInCurrentRoute(route: string): boolean {
    return this.location.path() === route;
  }

}
