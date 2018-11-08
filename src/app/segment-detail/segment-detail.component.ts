import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Segment} from '../segment';
import {DataService} from '../data.service';

@Component({
  selector: 'app-segment-detail',
  templateUrl: './segment-detail.component.html',
  styleUrls: ['./segment-detail.component.css']
})
export class SegmentDetailComponent implements OnInit {

  segment: Segment | Segment[];

  index: number;

  constructor(private route: ActivatedRoute,private segmentService: DataService) {
    route.queryParams.subscribe(params =>{
      this.index = params['index'];
      this.segment = this.segmentService.getSegments(params.index);
    })
  }

  ngOnInit() {

  }

}
