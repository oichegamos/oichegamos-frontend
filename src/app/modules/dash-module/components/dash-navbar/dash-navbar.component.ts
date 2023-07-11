import { routes } from 'src/app/shared/constants/routes.constant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.css']
})
export class DashNavbarComponent implements OnInit {

  public appRoutes = routes;

  @Input() pageName: string = 'Dashboard';
  @Input() currentRoute: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  areInCurrentRoute(route: string): boolean {
    return route === this.currentRoute;
  }

}
