import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SurfaceSensorDataService} from '../surface-sensor-data.service';
import {StartEndDate} from '../start-end-date';
import * as moment from 'moment';

@Component({
  selector: 'app-surface-site-curve',
  templateUrl: './surface-site-curve.component.html',
  styleUrls: ['./surface-site-curve.component.css']
})
export class SurfaceSiteCurveComponent implements OnInit, AfterViewInit {

  @Input() index: number;
  @Input() selectedSite: string;

  @Output() initialDate = new EventEmitter<StartEndDate>();

  data: any[] = [];

  startDate: string = '';
  endDate: string = '';

  constructor(private surfaceSensorDataService: SurfaceSensorDataService) {
  }

  ngOnInit() {
    this.setChartOption(this.index, this.selectedSite);
    let start = this.data[0][0];
    let end = moment(new Date()).format('YYYY-MM-DD HH:mm');
    this.initialDate.emit({start: start, end: end});
  }

  handlers: string[] = ['X角度', 'Y角度'/*, '监测数据'*/];

  selectedHandlerIndex: number = 0;

  selectHandler(index: number): void {
    this.selectedHandlerIndex = index;
    this.setChartOption(this.index, this.selectedSite);
  }

  chartOption: any = {};

  setChartOption(index: number, selectedSite: string): void {
    let data: any;
    if (this.selectedHandlerIndex === 0) {
      data = this.surfaceSensorDataService.getSurfaceSensorDataX(index, selectedSite);
    } else if (this.selectedHandlerIndex === 1) {
      data = this.surfaceSensorDataService.getSurfaceSensorDataY(index, selectedSite);
    }

    this.data = data.data;

    let now: Date = new Date();
    let start: Date = this.startDate === '' ? new Date(data.data[0][0]) : new Date(this.startDate);
    let end: Date = this.endDate === '' ? now : new Date(this.endDate);

    end = end <= now ? end : now;

    let temp: any[] = [];

    data.data.forEach(value => {
      let date = new Date(value[0]);
      if (date <= end && date >= start) {
        temp.push(value);
      }
    });

    data.data = temp;

    let title: string = this.selectedHandlerIndex === 0 ? 'X角度变化曲线' : 'Y角度变化曲线';

    this.chartOption = {
      title: {
        text: title,
        subtext: data.name,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (a) {
          return a.seriesName + '<br/>' + '变化量：' + a.value[1] + '°' + '<br/>' + '时间点：' + a.value[0];
        }
      },
      grid: {
        left: '3%',
        right: 80,
        bottom: 60,
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
        right: 80
      },
      dataZoom: [
        {
          type: 'slider',
          show: true,
          xAxisIndex: [0]
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
          right: 20
        },
        {
          type: 'inside',
          xAxisIndex: [0]
        },
        {
          type: 'inside',
          yAxisIndex: [0]
        }
      ],
      xAxis: {
        type: 'time',
        boundaryGap: false,
        name: '时间',
        nameLocation: 'middle',
        nameTextStyle: {
          padding: [20, 0, 0, 0]
        }
      },
      yAxis: {
        type: 'value',
        name: '角度(°)',
        nameLocation: 'middle',
        nameTextStyle: {
          padding: 18
        }/*,
        max: 5,
        min: -5*/
      },
      series: [
        data
      ]
    };
  }

  setChartOptionWithDate(date: StartEndDate): void {
    this.startDate = date.start;
    this.endDate = date.end;
    this.setChartOption(this.index, this.selectedSite);
  }

  ngAfterViewInit(): void {

  }
}
