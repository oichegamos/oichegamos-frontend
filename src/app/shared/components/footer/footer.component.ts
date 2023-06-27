import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { SocialMedias } from '../../constants/social_media.constant';
import { ISocialMedia } from '../../interfaces/social-media.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialMedias: Array<ISocialMedia> = SocialMedias;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.toggleClasses();

    this.renderer.listen('window', 'resize', () => {
      this.toggleClasses();
    });
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 576;
  }

  private toggleClasses() {
    const footerElement = this.elementRef.nativeElement.querySelector('.footer');

    if (this.isMobileDevice()) {
      this.renderer.addClass(footerElement, 'flex-column');
      // this.renderer.addClass(divElement, 'align-items-center');
      this.renderer.removeClass(footerElement, 'justify-content-between');
    } else {
      this.renderer.addClass(footerElement, 'justify-content-between');
      this.renderer.removeClass(footerElement, 'flex-column');
      // this.renderer.removeClass(divElement, 'align-items-center');
    }
  }

}
