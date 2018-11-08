import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topographic-info',
  templateUrl: './topographic-info.component.html',
  styleUrls: ['./topographic-info.component.css']
})
export class TopographicInfoComponent implements OnInit {

  @Input() segment: any;

  constructor() { }

  ngOnInit() {
  }

}
