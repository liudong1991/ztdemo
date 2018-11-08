import {Component, Input, OnInit} from '@angular/core';
import {Curve} from '../curve';
import {DataService} from '../data.service';
import {Segment} from '../segment';

@Component({
  selector: 'app-curve-basic-info',
  templateUrl: './curve-basic-info.component.html',
  styleUrls: ['./curve-basic-info.component.css']
})
export class CurveBasicInfoComponent implements OnInit {

  @Input() selectedSite: string;
  @Input() index: number;
  @Input() cross: string;

  segment: Segment | Segment[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.segment = this.dataService.getSegments(this.index);
  }
}
