import { Component, OnInit } from '@angular/core';
import { IOurStatus } from 'src/app/shared/interfaces/our-status.interface';
import { OurStatusService } from 'src/app/shared/services/our-status.service';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';

@Component({
  selector: 'app-our-status',
  templateUrl: './our-status.component.html',
  styleUrls: ['./our-status.component.css']
})
export class OurStatusComponent implements OnInit {

  public ourStatus: IOurStatus | null = null;

  constructor(
    private ourStatusService: OurStatusService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.loadOurStatus();
  }

  loadOurStatus() {
    this.ourStatusService.getOurStatus()
      .subscribe(
        (ourStatus: IOurStatus) => {
          this.ourStatus = ourStatus;
        }
      )
  }

  isMobileDevice(): boolean {
    return this.utilitiesService.isMobileDevice();
  }

}
