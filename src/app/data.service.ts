import {Injectable} from '@angular/core';
import {Segment} from './segment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  segments: Segment[] = [
    {
      roadName: '玉溪至楚雄高速公路',
      segmentNum: '001',
      stake: 'K37+445~K37+820',
      usedStake: '无',
      company: '中铁开发投资有限公司',
      position: '右侧',
      skNum: 1,
      dbNum: 5,
      pDirection: 278,
      trend: 188,
      pLength: 567,
      pHeight: 48,
      Lng: 102.2429,
      Lat: 24.3926,
      dxdm: '该段线路位于云贵高原西南部，地层略呈北西高、南东低之势。K37+600段属于浅切割低中山缓坡区。山顶浑圆，山峰齐一，波状起伏，山坡坡度多在20°左右，坡体上分布阶梯状旱田。沟谷呈宽阔“V”字型。',
      dcyx: '据区域地质资料、原有路线勘察报告，滑坡段出露的地层有：（1）第四系（Q4el+dl）岩性主要为残坡积粉质黏土，零星覆盖于滑坡范围以外的山体之上，厚度约1～3m左右。（2）侏罗系中统张河组（J2z）岩性以紫红色泥岩为主，局部夹粉砂质泥岩、泥质粉砂岩、砂岩薄层，薄～中层状。表层风化强烈，露头极破碎，遇水易软化。',
      dzgz: '潜在工程滑坡区为单斜构造。岩层产状278°∠20°。岩层倾角小于坡脚，为顺层坡。岩体发育节理：24°∠27°、130°∠78°和35°∠88°，岩体结构面组合均不利于边坡稳定。',
      swdz: '1、地表水边坡挖方正在施工中，上部两级边坡已基本挖到设计标高，靠大里程方向的坡体及坡脚局部地段有地下水渗出，造成坡脚沟内地表水较为丰富。距边坡开挖线30米左右有一条灌溉水渠，常年有流水，用于坡体上旱田灌溉。2、地下水本勘察区内地下水的赋存条件与分布规律主要受岩性、地貌、地质构造、水文、气象等自然因素的影响和制约，按含水介质、埋藏条件及水动力特征分为四类：松散岩类孔隙水、基岩裂隙水。 边坡区地下水较为丰富，钻孔揭露地下水位6.7-12.4米不等，地下水沿泥岩节理裂隙散流排泄，造成泥岩泥化、软化，严重影响边坡稳定。',
      gcjj: 'K37+600段为挖方路基。边坡最高为五级，边坡坡比为1:1～1:1.25，原设计为采用锚杆框格梁防护。2016年10月下旬，在边坡开挖至第一级边坡位置时，该段挖方边坡发生坍塌及工程滑坡。 按边坡开挖后的情况和岩层产状推测，潜在工程滑坡位于K37+445~K37+820段，前缘位于公路边坡脚，后缘将位于坡口线以外约50m，滑坡滑动方向垂直于路线。潜在工程滑坡长375米，最宽115米，平面面积26100m2，滑体最大厚度22m，滑体体积约为2.87×105m3，属于中型深层牵引式基岩顺层滑坡。'
    },
    {
      roadName: '玉溪至楚雄高速公路',
      segmentNum: 'CQ001',
      stake: 'K35+240~K35+620',
      usedStake: '无',
      company: '中铁西北科学研究院',
      position: '右侧',
      skNum: 1,
      dbNum: 6,
      pDirection: 0,
      trend: 0,
      pLength: 0,
      pHeight: 0,
      Lng: 108.0725,
      Lat: 31.0802,
      dxdm: '该段线路位于云贵高原西南部，地层略呈北西高、南东低之势。K37+600段属于浅切割低中山缓坡区。山顶浑圆，山峰齐一，波状起伏，山坡坡度多在20°左右，坡体上分布阶梯状旱田。沟谷呈宽阔“V”字型。',
      dcyx: '据区域地质资料、原有路线勘察报告，滑坡段出露的地层有：（1）第四系（Q4el+dl）岩性主要为残坡积粉质黏土，零星覆盖于滑坡范围以外的山体之上，厚度约1～3m左右。（2）侏罗系中统张河组（J2z）岩性以紫红色泥岩为主，局部夹粉砂质泥岩、泥质粉砂岩、砂岩薄层，薄～中层状。表层风化强烈，露头极破碎，遇水易软化。',
      dzgz: '潜在工程滑坡区为单斜构造。岩层产状278°∠20°。岩层倾角小于坡脚，为顺层坡。岩体发育节理：24°∠27°、130°∠78°和35°∠88°，岩体结构面组合均不利于边坡稳定。',
      swdz: '1、地表水边坡挖方正在施工中，上部两级边坡已基本挖到设计标高，靠大里程方向的坡体及坡脚局部地段有地下水渗出，造成坡脚沟内地表水较为丰富。距边坡开挖线30米左右有一条灌溉水渠，常年有流水，用于坡体上旱田灌溉。2、地下水本勘察区内地下水的赋存条件与分布规律主要受岩性、地貌、地质构造、水文、气象等自然因素的影响和制约，按含水介质、埋藏条件及水动力特征分为四类：松散岩类孔隙水、基岩裂隙水。 边坡区地下水较为丰富，钻孔揭露地下水位6.7-12.4米不等，地下水沿泥岩节理裂隙散流排泄，造成泥岩泥化、软化，严重影响边坡稳定。',
      gcjj: 'K37+600段为挖方路基。边坡最高为五级，边坡坡比为1:1～1:1.25，原设计为采用锚杆框格梁防护。2016年10月下旬，在边坡开挖至第一级边坡位置时，该段挖方边坡发生坍塌及工程滑坡。 按边坡开挖后的情况和岩层产状推测，潜在工程滑坡位于K37+445~K37+820段，前缘位于公路边坡脚，后缘将位于坡口线以外约50m，滑坡滑动方向垂直于路线。潜在工程滑坡长375米，最宽115米，平面面积26100m2，滑体最大厚度22m，滑体体积约为2.87×105m3，属于中型深层牵引式基岩顺层滑坡。'
    }
  ];

  getSegments(index?: number): any {
    if (index === undefined) {
      return this.segments;
    }
    return this.segments[index];
  }

  siteInfo: any[] = [
    {
      holeSites: [
        {
          cross: 'K37+666',
          siteNo: [
            {
              siteName: 'DTS-1',
              sensorList: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
            }
          ]
        }
      ],
      surfaceSites: [
        {
          cross: 'K37+573',
          siteNo: [
            {site: 'STS1-1', sensor: '680'},
            {site: 'STS1-2', sensor: '510'},
            {site: 'STS1-3', sensor: '564'},
            {site: 'STS1-4', sensor: '891'},
            {site: 'STS1-5', sensor: '764'}
          ]
        },
        /*{
          cross: 'K37+591',
          siteNo: [
            {site: 'STS2-1', sensor: '692'},
            {site: 'STS2-2', sensor: '879'},
            {site: 'STS2-3', sensor: '875'},
            {site: 'STS2-4', sensor: '662'},
            {site: 'STS2-5', sensor: '574'},
            {site: 'STS2-6', sensor: '787'}
          ]
        },
        {
          cross: 'K37+606',
          siteNo: [
            {site: 'STS3-1', sensor: '827'},
            {site: 'STS3-2', sensor: '986'},
            {site: 'STS3-3', sensor: '740'},
            {site: 'STS3-4', sensor: '993'},
            {site: 'STS3-5', sensor: '615'}
          ]
        },
        {
          cross: 'K37+628',
          siteNo: [
            {site: 'STS4-1', sensor: '981'},
            {site: 'STS4-2', sensor: '695'},
            {site: 'STS4-3', sensor: '777'},
            {site: 'STS4-4', sensor: '932'},
            {site: 'STS4-5', sensor: '994'},
            {site: 'STS4-6', sensor: '633'}
          ]
        },
        {
          cross: 'K37+666',
          siteNo: [
            {site: 'STS5-1', sensor: '952'},
            {site: 'STS5-2', sensor: '915'},
            {site: 'STS5-3', sensor: '945'}
          ]
        },*/
      ]
    },
    {
      holeSites: [
        {
          cross: 'Z3-1',
          siteNo: [
            {
              siteName: 'Z3-1',
              sensorList: ['7.5', '9.5', '11.5', '16.5', '17.5', '18.5', '20.5', '22.5', '24.5', '26.5']
            }
          ]
        }
      ],
      surfaceSites: [
        {
          cross: '2-1断面',
          siteNo: [{site: '2-1断面', sensor: '2181'}]
        },
        {
          cross: '3-1断面',
          siteNo: [{site: '3-1断面', sensor: '2046'}]
        },
        {
          cross: '3-3断面',
          siteNo: [{site: '3-3断面', sensor: '2048'}]
        },
        {
          cross: '4-1断面',
          siteNo: [{site: '4-1断面', sensor: '2140'}]
        },
        {
          cross: '断面1-1',
          siteNo: [{site: '断面1-1', sensor: '2211'}]
        },
        {
          cross: '天桥-1',
          siteNo: [{site: '天桥-1', sensor: '2015'}]
        }
      ]
    }
  ];

  getSiteInfo() {
    return this.siteInfo;
  }

  alarmInfo: any[] = [
    {
      hole: {
        wd: 0,
        siji: 0,
        sanji: 1,
        erji: 0,
        yiji: 0
      },
      surface: {
        wd: 5,
        siji: 0,
        sanji: 0,
        erji: 0,
        yiji: 0
      }
    },
    {
      hole: {
        wd: 1,
        siji: 0,
        sanji: 0,
        erji: 0,
        yiji: 0
      },
      surface: {
        wd: 6,
        siji: 0,
        sanji: 0,
        erji: 0,
        yiji: 0
      }
    }
  ];

  getAlarmInfo(index: number) {
    return this.alarmInfo[index];
  }
}
