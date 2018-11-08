import {Component, Input, OnInit} from '@angular/core';
import {Site} from '../site';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-monitoring-info',
  templateUrl: './monitoring-info.component.html',
  styleUrls: ['./monitoring-info.component.css']
})
export class MonitoringInfoComponent implements OnInit {

  @Input() index: number;

  holeSites: any[] = [];
  surfaceSites: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.holeSites = this.dataService.getSiteInfo()[this.index].holeSites;
    this.surfaceSites = this.dataService.getSiteInfo()[this.index].surfaceSites;
  }

  toHoleCurve(item: string, i: number, cross: string): void {
    this.router.navigate(['holeCurve'], {
      queryParams: {
        index: this.index,
        listIndex: i,
        cross: cross,
        item: item
      }
    });
  }

  toSurfaceCurve(item: string, i: number, cross: string): void {
    console.log(item);
    this.router.navigate(['surfaceCurve'], {
      queryParams: {
        index: this.index,
        listIndex: i,
        cross: cross,
        item: item
      }
    });
  }

}
