import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hole-sensor-list',
  templateUrl: './hole-sensor-list.component.html',
  styleUrls: ['./hole-sensor-list.component.css']
})
export class HoleSensorListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  itemList: string[] = [];

}
