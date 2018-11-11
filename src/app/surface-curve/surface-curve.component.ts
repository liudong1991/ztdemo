import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SurfaceSiteCurveComponent} from '../surface-site-curve/surface-site-curve.component';
import {StartEndDate} from '../start-end-date';
import {TimeSelectorComponent} from '../time-selector/time-selector.component';

@Component({
  selector: 'app-surface-curve',
  templateUrl: './surface-curve.component.html',
  styleUrls: ['./surface-curve.component.css']
})
export class SurfaceCurveComponent implements OnInit {

  @ViewChild('surfaceCurve')
  surfaceCurve: SurfaceSiteCurveComponent;
  @ViewChild('timeSelector2')
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
  index: number;
  listIndex: number;
  cross: string;

  siteChange(site: string): void {
    this.selectedSite = site;
    this.surfaceCurve.setChartOption(this.index, this.selectedSite);
  }

  timeInitial(date: StartEndDate): void {
    console.log(date);
    this.timeSelector.setInitialDate(date);
  }

  searchCurve(date: StartEndDate): void {
    this.surfaceCurve.setChartOptionWithDate(date);
  }

}
