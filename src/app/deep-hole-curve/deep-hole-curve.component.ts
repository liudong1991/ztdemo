import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-deep-hole-curve',
  templateUrl: './deep-hole-curve.component.html',
  styleUrls: ['./deep-hole-curve.component.css']
})
export class DeepHoleCurveComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  handlers: string[] = ['累积位移', '监测数据'];

}
