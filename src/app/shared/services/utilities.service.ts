import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() {  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 767;
  }

  getFiftyChars(value: string, withDots: boolean = true): string {
    if (value.length < 50) {
      return value;
    }

    const dots = withDots ? '...' : '';

    return value.substring(0, 50) + dots;
  }
}
