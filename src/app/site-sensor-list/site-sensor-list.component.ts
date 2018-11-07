import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

const LIST: any[][] = [
  [
    {site: 'STS1-1', sensor: '680'},
    {site: 'STS1-2', sensor: '510'},
    {site: 'STS1-3', sensor: '564'},
    {site: 'STS1-4', sensor: '891'},
    {site: 'STS1-5', sensor: '764'}
  ],
  [
    {site: 'STS2-1', sensor: '692'},
    {site: 'STS2-2', sensor: '879'},
    {site: 'STS2-3', sensor: '875'},
    {site: 'STS2-4', sensor: '662'},
    {site: 'STS2-5', sensor: '574'},
    {site: 'STS2-6', sensor: '787'}
  ],
  [
    {site: 'STS3-1', sensor: '827'},
    {site: 'STS3-2', sensor: '986'},
    {site: 'STS3-3', sensor: '740'},
    {site: 'STS3-4', sensor: '993'},
    {site: 'STS3-5', sensor: '615'}
  ],
  [
    {site: 'STS4-1', sensor: '981'},
    {site: 'STS4-2', sensor: '695'},
    {site: 'STS4-3', sensor: '777'},
    {site: 'STS4-4', sensor: '932'},
    {site: 'STS4-5', sensor: '994'},
    {site: 'STS4-6', sensor: '633'}
  ],
  [
    {site: 'STS5-1', sensor: '952'},
    {site: 'STS5-2', sensor: '915'},
    {site: 'STS5-3', sensor: '945'}
  ]
];

@Component({
  selector: 'app-site-sensor-list',
  templateUrl: './site-sensor-list.component.html',
  styleUrls: ['./site-sensor-list.component.css']
})
export class SiteSensorListComponent implements OnInit {

  @Input() selectedSite: string;

  @Output() onSiteChange = new EventEmitter<string>();

  isSelected: boolean = true;

  siteClass: any = {
    'h-title': true,
    'selector': this.isSelected
  };

  sensorClass: any = {
    'h-title': true,
    'selector': !this.isSelected
  };

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < LIST.length; i++) {
      for (let j = 0; j < LIST[i].length; j++) {
        if (LIST[i][j].site === this.selectedSite) {
          this.itemList = LIST[i];
          this.siteSelectedIndex = j;
          break;
        }
      }
    }
  }

  selectSiteList(): void {
    this.isSelected = true;
    this.setClass();
    this.sensorSelectedIndex = 0;
  }

  selectSensorList(): void {
    this.isSelected = false;
    this.setClass();
  }

  setClass() {
    this.siteClass = {
      'h-title': true,
      'selector': this.isSelected
    };

    this.sensorClass = {
      'h-title': true,
      'selector': !this.isSelected
    };
  }

  itemList: any[] = [];

  siteSelectedIndex: number = 0;
  sensorSelectedIndex: number = 0;

  selectSite(index: number): void {
    this.siteSelectedIndex = index;
    this.onSiteChange.emit(this.itemList[index].site);
  }

  selectSensor() {

  }

}
