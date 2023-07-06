import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() {  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 767;
  }
}
