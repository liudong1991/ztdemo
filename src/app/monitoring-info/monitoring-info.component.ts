import {Component, OnInit} from '@angular/core';
import {Site} from '../site';
import {Router} from '@angular/router';

@Component({
  selector: 'app-monitoring-info',
  templateUrl: './monitoring-info.component.html',
  styleUrls: ['./monitoring-info.component.css']
})
export class MonitoringInfoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  holeSites: Site[] = [
    {
      cross: 'K37+666',
      siteNo: ['DTS-1', 'DTS-2']
    }
  ];

  surfaceSites: Site[] = [
    {
      cross: 'K37+573',
      siteNo: ['STS1-1', 'STS1-2', 'STS1-3', 'STS1-4', 'STS1-5']
    },
    {
      cross: 'K37+591',
      siteNo: ['STS2-1', 'STS2-2', 'STS2-3', 'STS2-4', 'STS2-5', 'STS2-6']
    },
    {
      cross: 'K37+606',
      siteNo: ['STS3-1', 'STS3-2', 'STS3-3', 'STS3-4', 'STS3-5']
    },
    {
      cross: 'K37+628',
      siteNo: ['STS4-1', 'STS4-2', 'STS4-3', 'STS4-4', 'STS4-5', 'STS4-6']
    },
    {
      cross: 'K37+666',
      siteNo: ['STS5-1', 'STS5-2', 'STS5-3']
    },
  ];

  toHoleCurve(): void {
    this.router.navigateByUrl('holeCurve');
  }

  toSurfaceCurve(): void {
    this.router.navigateByUrl('surfaceCurve');
  }

}
