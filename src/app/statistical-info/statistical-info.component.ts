import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-statistical-info',
  templateUrl: './statistical-info.component.html',
  styleUrls: ['./statistical-info.component.css']
})
export class StatisticalInfoComponent implements OnInit {

  @Input() index: number;

  data: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.getAlarmInfo(this.index);
    this.setOptions();
  }

  chartOption: any;
  chartOption2: any;
  chartOption3: any;
  chartOption4: any;

  setOptions() {
    this.chartOption = {
      backgroundColor: '#fafafa',
      title: {
        text: '深部位移监测孔预警等级',
        x: 'center',
        top: 10,
        textStyle: {
          fontSize: 15
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        bottom: 10,
        data: ['稳定', '四级预警', '三级预警', '二级报警', '一级报警']
      },
      color: ['skyblue', '#67E0E3', '#FF9F7F', 'yellow', 'red'],
      radius: '60%',
      series: [
        {
          name: '深孔',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            {value: this.data.hole.wd, name: '稳定'},
            {value: this.data.hole.siji, name: '四级预警'},
            {value: this.data.hole.sanji, name: '三级预警'},
            {value: this.data.hole.erji, name: '二级报警'},
            {value: this.data.hole.yiji, name: '一级报警'}
          ],
          label: {
            normal: {
              show: false
            }
          }
        }
      ]
    };

    this.chartOption2 = {
      backgroundColor: '#fafafa',
      title: {
        text: '地表变形监测点预警等级',
        x: 'center',
        top: 10,
        textStyle: {
          fontSize: 15
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        bottom: 10,
        data: ['稳定', '四级预警', '三级预警', '二级报警', '一级报警']
      },
      color: ['skyblue', '#67E0E3', '#FF9F7F', 'yellow', 'red'],
      radius: '60%',
      series: [
        {
          name: '地表',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            {value: this.data.surface.wd, name: '稳定'},
            {value: this.data.surface.siji, name: '四级预警'},
            {value: this.data.surface.sanji, name: '三级预警'},
            {value: this.data.surface.erji, name: '二级报警'},
            {value: this.data.surface.yiji, name: '一级报警'}
          ],
          label: {
            normal: {
              show: false
            }
          }
        }
      ]
    };

    this.chartOption3 = {
      color: ['skyblue', '#67E0E3', '#FF9F7F', 'yellow', 'red'],
      tooltip: {
        trigger: 'axis',
        formatter: '{a} <br/>{b} : {c}',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['稳定', '四级预警', '三级预警', '二级报警', '一级报警']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '个数',
        }
      ],
      series: [
        {
          name: '深孔',
          type: 'bar',
          barWidth: '60%',
          data: [this.data.hole.wd, this.data.hole.siji, this.data.hole.sanji, this.data.hole.erji, this.data.hole.yiji],
          itemStyle: {
            normal: {
              color: function (params) {
                let colorList = ['skyblue', '#67E0E3', '#FF9F7F', 'yellow', 'red'];
                return colorList[params.dataIndex];
              }
            }
          }
        }
      ]
    };

    this.chartOption4 = {
      color: ['skyblue', '#67E0E3', '#FF9F7F', 'yellow', 'red'],
      tooltip: {
        trigger: 'axis',
        formatter: '{a} <br/>{b} : {c}',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['稳定', '四级预警', '三级预警', '二级报警', '一级报警']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '个数',
        }
      ],
      series: [
        {
          name: '地表',
          type: 'bar',
          barWidth: '60%',
          data: [this.data.surface.wd, this.data.surface.siji, this.data.surface.sanji, this.data.surface.erji, this.data.surface.yiji],
          itemStyle: {
            normal: {
              color: function (params) {
                let colorList = ['skyblue', '#67E0E3', '#FF9F7F', 'yellow', 'red'];
                return colorList[params.dataIndex];
              }
            }
          }
        }
      ]
    };
  }
}
