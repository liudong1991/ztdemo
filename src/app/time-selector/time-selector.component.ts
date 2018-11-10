import {Component, OnInit} from '@angular/core';
import {FlatpickrOptions} from 'ng2-flatpickr';

import Mandarin from 'flatpickr/dist/l10n/zh';


@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent implements OnInit {

  options: FlatpickrOptions = {};

  constructor() {
  }

  ngOnInit() {
    this.setOptions();
  }

  setOptions(): void {
    this.options = {
      locale: Mandarin.zh,
      time_24hr: true,
      enableTime: true,
      dateFormat: 'Y-m-d H:i'
    };
  }

}
