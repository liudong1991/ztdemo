import {Component, OnInit, ViewChild} from '@angular/core';

import {SwiperComponent, SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-road-statics',
  templateUrl: './road-statics.component.html',
  styleUrls: ['./road-statics.component.css']
})
export class RoadStaticsComponent implements OnInit {
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

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  ngOnInit(): void {

  }

  public chartOption = {
    backgroundColor: '#fafafa',
    title: {
      text: '边坡监测预警级别分类统计',
      x: 'center',
      top: 10,
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: ['关注级', '注意级', '预警级', '报警级']
    },
    color: ['skyblue', '#67E0E3', '#FF9F7F', 'red'],
    radius: '60%',
    series: [
      {
        name: '边坡稳定性',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 1, name: '关注级'},
          {value: 0, name: '注意级'},
          {value: 0, name: '预警级'},
          {value: 0, name: '报警级'}
        ],
        label: {
          normal: {
            show: false
          }
        }
      }
    ]
  };
  public chartOption2 = {
    backgroundColor: '#fafafa',
    title: {
      text: '边坡病害类型统计',
      x: 'center',
      top: 10,
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: ['无病害', '坡面溜塌、危岩落石', '边坡局部变形、危岩落石', '滑坡(边坡整体滑动)']
    },
    color: ['skyblue', '#67E0E3', '#FF9F7F', 'red'],
    radius: '60%',
    series: [
      {
        name: '边坡病害',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 1, name: '无病害'},
          {value: 0, name: '坡面溜塌、危岩落石'},
          {value: 0, name: '边坡局部变形、危岩落石'},
          {value: 0, name: '滑坡(边坡整体滑动)'}
        ],
        label: {
          normal: {
            show: false
          }
        }
      }
    ]
  };
  public chartOption3 = {
    backgroundColor: '#fafafa',
    title: {
      text: '边坡高度统计',
      x: 'center',
      top: 10,
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: ['0~20m', '21~30m', '31~40m', '41~50m', '>50m']
    },
    radius: '60%',
    series: [
      {
        name: '边坡高度',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 1, name: '0~20m'},
          {value: 0, name: '21~30m'},
          {value: 0, name: '31~40m'},
          {value: 0, name: '41~50m'},
          {value: 0, name: '>50m'},
        ],
        label: {
          normal: {
            show: false
          }
        }
      }
    ]
  };
  public chartOption4 = {
    backgroundColor: '#fafafa',
    title: {
      text: '边坡类型统计',
      x: 'center',
      top: 10,
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 10
    },
    radius: '60%',
    series: [
      {
        name: '边坡类型',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 1, name: '均质土边坡'},
          {value: 0, name: '类土质边坡'},
          {value: 0, name: '破碎岩石边坡'},
          {value: 0, name: '层状岩石边坡'},
          {value: 0, name: '节理岩石边坡'},
          {value: 0, name: '二元结构边坡'},
          {value: 0, name: '崩滑流堆积边坡'},
          {value: 0, name: '路堤边坡'},
        ],
        label: {
          normal: {
            show: false
          }
        }
      }
    ]
  };

}
