import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-surface-curve',
  templateUrl: './surface-curve.component.html',
  styleUrls: ['./surface-curve.component.css']
})
export class SurfaceCurveComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(queryParams => {
      this.selectedSite = queryParams.item;
    });
  }

  ngOnInit() {
  }

  selectedSite: string = '';

  siteChange(site: string): void {
    this.selectedSite = site;
  }

}
