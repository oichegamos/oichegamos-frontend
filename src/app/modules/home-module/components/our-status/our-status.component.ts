import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';

@Component({
  selector: 'app-our-status',
  templateUrl: './our-status.component.html',
  styleUrls: ['./our-status.component.css']
})
export class OurStatusComponent implements OnInit {

  constructor(
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
  }

  isMobileDevice(): boolean {
    return this.utilitiesService.isMobileDevice();
  }

}
