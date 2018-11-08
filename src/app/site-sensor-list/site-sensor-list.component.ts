import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-site-sensor-list',
  templateUrl: './site-sensor-list.component.html',
  styleUrls: ['./site-sensor-list.component.css']
})
export class SiteSensorListComponent implements OnInit {

  @Input() index: number;
  @Input() listIndex: number;
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

  constructor(private dataService: DataService) {
  }

  list: any[] = [];

  ngOnInit() {
    this.itemList = this.dataService.getSiteInfo()[this.index].surfaceSites[this.listIndex].siteNo;
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].site === this.selectedSite) {
        this.siteSelectedIndex = i;
        break;
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
