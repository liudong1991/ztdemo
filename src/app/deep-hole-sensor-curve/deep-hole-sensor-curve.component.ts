import {Component, Input, OnInit} from '@angular/core';
import {DeepHoleSensorDataService} from '../deep-hole-sensor-data.service';
import {StartEndDate} from '../start-end-date';

@Component({
  selector: 'app-deep-hole-sensor-curve',
  templateUrl: './deep-hole-sensor-curve.component.html',
  styleUrls: ['./deep-hole-sensor-curve.component.css']
})
export class DeepHoleSensorCurveComponent implements OnInit {

  @Input() selectedSite: string;
  @Input() selectedSensorIndex: number;

  @Input() searchDate: StartEndDate;

  startDate: string;
  endDate: string;

  constructor(private holeSensorDataService: DeepHoleSensorDataService) {
  }

  ngOnInit() {
    this.startDate = this.searchDate.start;
    this.endDate = this.searchDate.end;
    this.setChartOption(this.selectedSite, this.selectedSensorIndex);
  }

  handlers: string[] = ['X位移', 'Y位移'/*, '监测数据'*/];

  selectedHandlerIndex: number = 0;

  selectHandler(index: number): void {
    this.selectedHandlerIndex = index;
    this.setChartOption(this.selectedSite, this.selectedSensorIndex);
  }

  chartOption: any = {};

  setChartOption(selectedSite: string, selectedSensorIndex: number): void {
    let data: any;
    if (this.selectedHandlerIndex === 0) {
      data = this.holeSensorDataService.getDeepHoleSensorDataX(selectedSite, selectedSensorIndex);
    } else if (this.selectedHandlerIndex === 1) {
      data = this.holeSensorDataService.getDeepHoleSensorDataY(selectedSite, selectedSensorIndex);
    }

    let now: Date = new Date();
    let end: Date = new Date(this.endDate) <= now ? new Date(this.endDate) : now;
    let temp: any[] = [];
    data.data.forEach(item => {
      let date = new Date(item[0]);
      if (date <= end && date >= new Date(this.startDate)) {
        temp.push(item);
      }
    });
    data.data = temp;
    console.log(temp);

    let title: string = this.selectedHandlerIndex === 0 ? 'X位移变化曲线' : 'Y位移变化曲线';

    this.chartOption = {
      title: {
        text: title,
        subtext: data.name,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (a) {
          return a.seriesName + '<br/>' + '变化量：' + a.value[1] + 'mm' + '<br/>' + '时间点：' + a.value[0];
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
        name: '变化量(mm)',
        nameLocation: 'middle',
        nameTextStyle: {
          padding: 18
        },
        max: 10,
        min: -10
      },
      series: [
        data
      ]
    };
  }

  setChartOptionWithDate(date: StartEndDate) {
    this.startDate = date.start;
    this.endDate = date.end;
    this.setChartOption(this.selectedSite, this.selectedSensorIndex);
  }


}
