import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeepHoleCurveComponent} from '../deep-hole-curve/deep-hole-curve.component';

@Component({
  selector: 'app-hole-curve',
  templateUrl: './hole-curve.component.html',
  styleUrls: ['./hole-curve.component.css']
})
export class HoleCurveComponent implements OnInit {

  @ViewChild('holeCurve')
  holeCurve: DeepHoleCurveComponent;

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(queryParams => {
      this.selectedSite = queryParams.item;
      this.index = queryParams.index;
      this.listIndex = queryParams.listIndex;
      this.cross = queryParams.cross;
    });
  }

  ngOnInit() {
  }

  selectedSite: string = '';
  selectedSensorIndex: number = 0;
  index: number;
  listIndex: number;
  cross: string;

  iswhichShow: boolean = true;

  setSelectedSite(value: string) {
    this.selectedSite = value;
    this.refreshHoleCurve(value);
  }

  refreshHoleCurve(siteName: string): void {
    this.holeCurve.setChartOption(siteName);
  }

}
