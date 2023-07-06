import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
  }

  isMobileDevice(): boolean {
    return this.utilitiesService.isMobileDevice();
  }

}
