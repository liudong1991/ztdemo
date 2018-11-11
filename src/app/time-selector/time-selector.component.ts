import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FlatpickrOptions} from 'ng2-flatpickr';

import Mandarin from 'flatpickr/dist/l10n/zh';
import * as moment from 'moment';
import {StartEndDate} from '../start-end-date';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent implements OnInit {

  startDate: string;
  endDate: string;

  @Output() searchCurve = new EventEmitter<StartEndDate>();

  emitter: StartEndDate;

  startOptions: FlatpickrOptions = {};
  endOptions: FlatpickrOptions = {};

  constructor() {
  }

  ngOnInit() {
  }

  setOptions(): void {
    this.startOptions = {
      locale: Mandarin.zh,
      time_24hr: true,
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: this.startDate,
      onChange: value => {
        let date = new Date(value[0]);
        this.startDate = moment(date).format('YYYY-MM-DD HH:mm');
      }
    };
    this.endOptions = {
      locale: Mandarin.zh,
      time_24hr: true,
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: this.endDate,
      onChange: value => {
        let date = new Date(value[0]);
        this.endDate = moment(date).format('YYYY-MM-DD HH:mm');
      }
    };
  }

  setInitialDate(date: any): void {
    console.log('setInitialDate');
    console.log(date);
    this.startDate = date.start;
    this.endDate = date.end;
    this.setOptions();
  }

  search(): void {
    this.emitter = {
      start: this.startDate,
      end: this.endDate
    };
    this.searchCurve.emit(this.emitter);
  }

}
