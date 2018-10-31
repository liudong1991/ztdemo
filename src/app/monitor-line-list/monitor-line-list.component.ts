import {Component, OnInit} from '@angular/core';
import {Segment} from '../segment';

const HEADERS: string[] = ['监测段编号', '起讫桩号', '曾用桩号', '所属单位', '位置', '深孔数量(个)', '地表数量(个)', '坡向(°)', '走向(°)', '坡长(m)', '坡高(m)', '经度(°)', '纬度(°)'];

const SEGMENTS: Segment[] = [
  {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }, {
    segmentNum: '001',
    stake: 'K37+445~K37+820',
    usedStake: '无',
    company: '中铁开发投资有限公司',
    position: '右侧',
    skNum: 2,
    dbNum: 25,
    pDirection: 278,
    trend: 188,
    pLength: 567,
    pHeight: 48,
    Lng: 102.2429,
    Lat: 24.3926
  }
];

@Component({
  selector: 'app-monitor-line-list',
  templateUrl: './monitor-line-list.component.html',
  styleUrls: ['./monitor-line-list.component.css']
})
export class MonitorLineListComponent implements OnInit {

  data = SEGMENTS;

  headers = HEADERS;

  constructor() {
  }

  ngOnInit() {
  }

}
