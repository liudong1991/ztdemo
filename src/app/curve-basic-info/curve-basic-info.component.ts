import {Component, Input, OnInit} from '@angular/core';
import {Curve} from '../curve';

@Component({
  selector: 'app-curve-basic-info',
  templateUrl: './curve-basic-info.component.html',
  styleUrls: ['./curve-basic-info.component.css']
})
export class CurveBasicInfoComponent implements OnInit {

  @Input() selectedSite: string;

  constructor() {
  }

  ngOnInit() {
  }

  siteInfo: Curve = {
    segmentNo: '001',
    strake: 'K37+445~K37+820',
    position: '右侧',
    cross: 'K37+666',
    siteNo: 'DTS-1'
  };
}
