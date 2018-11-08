import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SurfaceSiteCurveComponent} from '../surface-site-curve/surface-site-curve.component';

@Component({
  selector: 'app-surface-curve',
  templateUrl: './surface-curve.component.html',
  styleUrls: ['./surface-curve.component.css']
})
export class SurfaceCurveComponent implements OnInit {

  @ViewChild('surfaceCurve')
  surfaceCurve: SurfaceSiteCurveComponent;

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

}
