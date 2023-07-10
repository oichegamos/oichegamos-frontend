import { Component, OnInit } from '@angular/core';
import { routes } from '../../constants/routes.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public appRoutes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
