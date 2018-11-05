import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hole-curve',
  templateUrl: './hole-curve.component.html',
  styleUrls: ['./hole-curve.component.css']
})
export class HoleCurveComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(queryParams => {
      this.selectedSite = queryParams.item;
    });
  }

  ngOnInit() {
  }

  selectedSite: string = '';

  iswhichShow: boolean = true;

  setSelectedSite(value: string) {
    this.selectedSite = value;
  }

}
