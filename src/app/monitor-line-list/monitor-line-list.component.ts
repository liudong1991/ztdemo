import {Component, OnInit} from '@angular/core';
import {Segment} from '../segment';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

const HEADERS: string[] = ['监测段编号', '起讫桩号', '曾用桩号', '所属单位', '位置', '深孔数量(个)', '地表数量(个)', '坡向(°)', '走向(°)', '坡长(m)', '坡高(m)', '经度(°)', '纬度(°)'];

@Component({
  selector: 'app-monitor-line-list',
  templateUrl: './monitor-line-list.component.html',
  styleUrls: ['./monitor-line-list.component.css']
})
export class MonitorLineListComponent implements OnInit {

  data: Segment | Segment[];

  headers = HEADERS;

  constructor(private router: Router, private segmentService: DataService) {
  }

  ngOnInit() {
    this.data = this.segmentService.getSegments();
  }

  goSegmentDetail(index: number): void {
    this.router.navigate(['segmentDetail'], {
      queryParams: {
        index: index
      }
    });
  }

}
