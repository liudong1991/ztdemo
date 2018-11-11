import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurveDataService} from '../curve-data.service';
import {StartEndDate} from '../start-end-date';
import * as moment from 'moment';

@Component({
  selector: 'app-deep-hole-curve',
  templateUrl: './deep-hole-curve.component.html',
  styleUrls: ['./deep-hole-curve.component.css']
})
export class DeepHoleCurveComponent implements OnInit, AfterViewInit {

  @Input() siteName: string;
  @Output() dateInitial = new EventEmitter<StartEndDate>();

  startDate: string = '';
  endDate: string = '';

  emitter: StartEndDate;


  constructor(private curveDataService: CurveDataService) {
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.setChartOption(this.siteName);

    this.startDate = this.data[this.data.length - 1].name;
    let now = new Date();
    this.endDate = moment(now).format('YYYY-MM-DD HH:mm');
    this.emitter = {
      start: this.startDate,
      end: this.endDate
    };
    this.dateInitial.emit(this.emitter);
  }

  handlers: string[] = ['累积位移'/*, '监测数据'*/];

  selectedHandlerIndex: number = 0;

  selectHandler(index: number): void {
    this.selectedHandlerIndex = index;
  }

  data: any[] = [];

  chartOption: any = {};

  setChartOption(siteName: string): void {
    this.data = this.curveDataService.getHoleData(siteName);

    let temp: any[] = [];
    let now = new Date();
    let start: Date = this.startDate === '' ? new Date(this.data[this.data.length - 1].name) : new Date(this.startDate);
    let end: Date = this.endDate === '' ? now : new Date(this.endDate);
    end = end <= now ? end : now;
    this.data.forEach(value => {
      let itemDate = new Date(value.name);
      if (itemDate <= end && itemDate >= start) {
        temp.push(value);
      }
    });
    console.log(start);
    console.log(end);

    this.chartOption = {
      title: {
        text: `累积位移变化曲线(${siteName})`,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (a) {
          return '时间：' + a.seriesName + '<br/>' + '埋深：' + a.value[1] + 'm<br/>' + '变化量：' + a.value[0] + 'mm';
        }
      },
      legend: {
        orient: 'vertical',
        type: 'scroll',
        top: 40,
        left: '87%',
        bottom: '3%'
      },
      grid: {
        left: '4%',
        right: '15%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        },
        right: '2%'
      },
      xAxis: {
        type: 'value',
        boundaryGap: false,
        position: 'top',
        name: '变化量(mm)',
        nameLocation: 'middle',
        nameTextStyle: {
          padding: 10
        },
        min: -80,
        max: 80
      },
      yAxis: {
        type: 'value',
        inverse: true,
        name: '埋深(m)',
        nameLocation: 'middle',
        nameTextStyle: {
          padding: 10
        }
      },
      series: temp
    };
  }

  setChartOptionWithDate(date: StartEndDate) {
    console.log('setChartOptionWithDate');
    this.startDate = date.start;
    this.endDate = date.end;
    this.setChartOption(this.siteName);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")

  }

}
