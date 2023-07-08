import { Component, OnInit } from '@angular/core';
import { IAboutUs } from 'src/app/shared/interfaces/about-us.interface';
import { AboutUsService } from 'src/app/shared/services/about-us.service';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public aboutUs: IAboutUs | null = null;

  constructor(
    private aboutUsService: AboutUsService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.loadAboutUs();
  }

  loadAboutUs() : void {
    this.aboutUsService.getAboutUs()
      .subscribe(
        (aboutUs: IAboutUs) => {
          this.aboutUs = aboutUs;
        }
      )
  }

  isMobileDevice(): boolean {
    return this.utilitiesService.isMobileDevice();
  }

}
