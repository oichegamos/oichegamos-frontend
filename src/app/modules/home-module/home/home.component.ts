import { Component, OnInit } from '@angular/core';
import { SocialMedias } from 'src/app/shared/constants/social_media.constant';
import { ISocialMedia } from 'src/app/shared/interfaces/social-media.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socialMedias: Array<ISocialMedia> = SocialMedias;

  constructor() { }

  ngOnInit(): void {
  }

}
