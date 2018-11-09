import {Component, Input, OnInit} from '@angular/core';
import {SurfaceSensorDataService} from '../surface-sensor-data.service';

@Component({
  selector: 'app-surface-site-curve',
  templateUrl: './surface-site-curve.component.html',
  styleUrls: ['./surface-site-curve.component.css']
})
export class SurfaceSiteCurveComponent implements OnInit {

  @Input() index: number;
  @Input() selectedSite: string;

  constructor(private surfaceSensorDataService: SurfaceSensorDataService) {
  }

  ngOnInit() {
    this.setChartOption(this.index, this.selectedSite);
  }

  handlers: string[] = ['X角度', 'Y角度'/*, '监测数据'*/];

  selectedHandlerIndex: number = 0;

  selectHandler(index: number): void {
    this.selectedHandlerIndex = index;
    this.setChartOption(this.index, this.selectedSite);
  }

  chartOption: any = {};

  setChartOption(index: number, selectedSite: string): void {
    console.log('index:' + index);
    console.log('selectedSite:' + selectedSite);
    let data: any;
    if (this.selectedHandlerIndex === 0) {
      data = this.surfaceSensorDataService.getSurfaceSensorDataX(index, selectedSite);
    } else if (this.selectedHandlerIndex === 1) {
      data = this.surfaceSensorDataService.getSurfaceSensorDataY(index, selectedSite);
    }

    console.log(data);

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
}
