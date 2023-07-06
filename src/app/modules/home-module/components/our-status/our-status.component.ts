import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-status',
  templateUrl: './our-status.component.html',
  styleUrls: ['./our-status.component.css']
})
export class OurStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 767;
  }

}
