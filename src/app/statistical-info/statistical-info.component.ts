import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistical-info',
  templateUrl: './statistical-info.component.html',
  styleUrls: ['./statistical-info.component.css']
})
export class StatisticalInfoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public chartOption = {
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
          {value: 1, name: '稳定'},
          {value: 0, name: '四级预警'},
          {value: 0, name: '三级预警'},
          {value: 0, name: '二级报警'},
          {value: 0, name: '一级报警'}
        ],
        label: {
          normal: {
            show: false
          }
        }
      }
    ]
  };
  public chartOption2 = {
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
          {value: 25, name: '稳定'},
          {value: 0, name: '四级预警'},
          {value: 0, name: '三级预警'},
          {value: 0, name: '二级报警'},
          {value: 0, name: '一级报警'}
        ],
        label: {
          normal: {
            show: false
          }
        }
      }
    ]
  };
  public chartOption3 = {
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
        data: [1, 0, 0, 0, 0],
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
  public chartOption4 = {
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
        data: [25, 0, 0, 0, 0],
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
