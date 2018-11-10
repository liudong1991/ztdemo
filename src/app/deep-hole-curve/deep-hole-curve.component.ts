import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CurveDataService} from '../curve-data.service';

@Component({
  selector: 'app-deep-hole-curve',
  templateUrl: './deep-hole-curve.component.html',
  styleUrls: ['./deep-hole-curve.component.css']
})
export class DeepHoleCurveComponent implements OnInit, AfterViewInit {

  @Input() siteName: string;

  constructor(private curveDataService: CurveDataService) {
  }

  ngOnInit() {
    this.setChartOption(this.siteName);
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
    this.data.forEach(value => {
      let itemDate = new Date(value.name);
      if (itemDate <= now) {
        temp.push(value);
      }
    });

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
        max: 150
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

  ngAfterViewInit(): void {

  }

}
