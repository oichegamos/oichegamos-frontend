import { Component, OnInit } from '@angular/core';
import { SocialMedias } from 'src/app/shared/constants/social_media.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socialMedias: Array<any> = SocialMedias;

  constructor() { }

  ngOnInit(): void {
  }

}
