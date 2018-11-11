import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeepHoleCurveComponent} from '../deep-hole-curve/deep-hole-curve.component';
import {DeepHoleSensorCurveComponent} from '../deep-hole-sensor-curve/deep-hole-sensor-curve.component';
import {TimeSelectorComponent} from '../time-selector/time-selector.component';
import {StartEndDate} from '../start-end-date';

@Component({
  selector: 'app-hole-curve',
  templateUrl: './hole-curve.component.html',
  styleUrls: ['./hole-curve.component.css']
})
export class HoleCurveComponent implements OnInit {

  @ViewChild('holeCurve')
  holeCurve: DeepHoleCurveComponent;
  @ViewChild('sensorCurve')
  sensorCurve: DeepHoleSensorCurveComponent;
  @ViewChild('timeSelector')
  timeSelector: TimeSelectorComponent;

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

  refreshSensorCurve(sensorIndex: number): void {
    this.selectedSensorIndex = sensorIndex;
    this.sensorCurve.setChartOption(this.selectedSite, sensorIndex);
  }

  holeAndSensorListChange(isHole: boolean): void {
    this.iswhichShow = isHole;
    if (isHole) {
      this.selectedSensorIndex = 0;
    }
  }

  searchDate: StartEndDate;

  setInitialDate(date: StartEndDate): void {
    console.log('setInitialDate');
    this.searchDate = date;
    this.timeSelector.setInitialDate(date);
  }

  searchCurve(date: StartEndDate): void {
    this.searchDate = date;
    console.log(this.iswhichShow);
    if (this.iswhichShow) {
      this.holeCurve.setChartOptionWithDate(date);
    }
    else {
      this.sensorCurve.setChartOptionWithDate(date);
    }
  }

}
