import { routes } from 'src/app/shared/constants/routes.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.css']
})
export class DashNavbarComponent implements OnInit {

  public appRoutes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
