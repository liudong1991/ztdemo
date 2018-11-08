import {Component, Input, OnInit} from '@angular/core';

const segment_info: any[] = [
  {
    road: '玉溪至楚雄高速公路',
    company: '中铁开发投资有限公司',
    segmentNo: '001',
    usedStrake: '',
    strake: 'K37',
    position: '',
    pDirection: '',
    zDirection: '',
    pLength: '',
    pHeight: '',
    lng: '',
    lat: ''
  }
];

@ Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  @Input() segment: any;

  constructor() {
  }

  ngOnInit() {
  }

}
