import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {SwiperComponent, SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-site-photos',
  templateUrl: './site-photos.component.html',
  styleUrls: ['./site-photos.component.css']
})
export class SitePhotosComponent implements OnInit {

  public disabled: boolean = false;

  @Input() index: number;

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
    this.pics = this.index == 0 ? this.xianchang : this.xianchang2;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  xianchang: string[] = [
    'assets/pic/005.jpg',
    'assets/pic/006.jpg',
    'assets/pic/jizhan.JPG',
    'assets/pic/cedian.JPG'
  ];
  xianchang2: string[] = [
    'assets/pic/cedian001.JPG',
    'assets/pic/cedian002.JPG',
    'assets/pic/jizhan001.JPG'
  ];

  pics: string[] = [];

}
