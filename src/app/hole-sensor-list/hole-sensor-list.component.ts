import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hole-sensor-list',
  templateUrl: './hole-sensor-list.component.html',
  styleUrls: ['./hole-sensor-list.component.css']
})
export class HoleSensorListComponent implements OnInit {

  @Output() switchSite = new EventEmitter<string>();
  @Input() selectedSite: string;

  @Output() onHoleAndSensorChange = new EventEmitter<boolean>();

  @Output() onHoleChange = new EventEmitter<string>();

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
    console.log(this.selectedSite);
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

  itemList: any[] = [
    {'siteName': 'DTS-1', 'sensorList': ['2', '4', '6', '8', '10', '12']}/*,
    {'siteName': 'DTS-2', 'sensorList': ['1.5', '3', '4.5', '5', '6', '7.5']}*/
  ];

  siteSelectedIndex: number = 0;
  sensorSelectedIndex: number = 0;

  selectSite(index: number): void {
    this.siteSelectedIndex = index;
    this.switchSite.emit(this.itemList[this.siteSelectedIndex].siteName);
  }

  selectSensor(index: number) {
    this.sensorSelectedIndex = index;
  }


}
