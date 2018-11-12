import {Component, OnInit, ViewChild} from '@angular/core';
import {SwiperComponent, SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-arrangement-diagram',
  templateUrl: './arrangement-diagram.component.html',
  styleUrls: ['./arrangement-diagram.component.css']
})
export class ArrangementDiagramComponent implements OnInit {

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
    'assets/pic/limiantu.png'
  ];

}
