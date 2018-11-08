import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hole-sensor-list',
  templateUrl: './hole-sensor-list.component.html',
  styleUrls: ['./hole-sensor-list.component.css']
})
export class HoleSensorListComponent implements OnInit {

  @Input() index: number;
  @Input() listIndex: number;
  @Input() selectedSite: string;

  @Output() onHoleAndSensorChange = new EventEmitter<boolean>();
  @Output() switchSite = new EventEmitter<string>();
  @Output() switchSensor = new EventEmitter<number>();

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

  ngOnInit() {
    this.itemList = this.dataService.getSiteInfo()[this.index].holeSites[this.listIndex].siteNo;
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].siteName === this.selectedSite) {
        this.siteSelectedIndex = i;
        break;
      }
    }
  }

  selectSiteList(): void {
    this.isSelected = true;
    this.setClass();
    this.sensorSelectedIndex = 0;
    this.onHoleAndSensorChange.emit(this.isSelected);
  }

  selectSensorList(): void {
    this.isSelected = false;
    this.setClass();
    this.onHoleAndSensorChange.emit(this.isSelected);
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
    this.switchSite.emit(this.itemList[this.siteSelectedIndex].siteName);
  }

  selectSensor(index: number) {
    this.sensorSelectedIndex = index;
    this.switchSensor.emit(index);
  }

}
