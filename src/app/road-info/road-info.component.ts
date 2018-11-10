import {Component, OnInit} from '@angular/core';
import {RoadInfo} from '../road-info';

@Component({
  selector: 'app-road-info',
  templateUrl: './road-info.component.html',
  styleUrls: ['./road-info.component.css']
})
export class RoadInfoComponent implements OnInit {

  roadInfo: RoadInfo = {
    roadName: '玉溪至楚雄高速公路',
    stakeNum: 'K35+240~K37+820',
    usedStakeNum: '无',
    roadType: '高速公路',
    province: '云南省',
    roadProfile: '弥勒至楚雄高速公路玉溪至楚雄段，路线起于玉溪市红塔区，接昆明至磨憨高速公路(G8511)，经玉溪市峨山县、易门县，昆明市晋宁县(边缘)，跨绿汁江，过楚雄州双柏县、楚雄市，与杭州至瑞丽高速高速(G56)交叉后，止点接拟建省高楚雄至大姚高速公路起点。K37+447～K37+820右侧边坡为勘察试验段，该试验段起止桩号为K29+600～K40+100，全长10.5公里，双向六车道高速公路，路基宽度为33.5米。'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
