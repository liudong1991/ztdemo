import {Component, OnInit, ViewChild} from '@angular/core';

import {SwiperComponent, SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-site-photos',
  templateUrl: './site-photos.component.html',
  styleUrls: ['./site-photos.component.css']
})
export class SitePhotosComponent implements OnInit {

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };

  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

  constructor() {
  }

  ngOnInit() {
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  pics: string[] = [
    'assets/pic/001.jpg',
    'assets/pic/002.jpg',
    'assets/pic/003.jpg',
    'assets/pic/004.jpg',
  ];

  xianchang: string[] = [
    'assets/pic/005.jpg',
    'assets/pic/006.jpg',
    'assets/pic/基站.JPG',
    'assets/pic/测点.JPG'
  ];

}
