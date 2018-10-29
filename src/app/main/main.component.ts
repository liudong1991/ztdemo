import {Component, OnInit} from '@angular/core';

// declare var qq: any;
declare var BMap: any;
declare var BMAP_HYBRID_MAP: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const myLatlng = new qq.maps.LatLng(22.611475, 114.123230);
    // const map = new qq.maps.Map(document.getElementById('map'), {
    //   zoom: 16,
    //   center: myLatlng,
    //   mapTypeId: qq.maps.MapTypeId.SATELLITE
    // });

    const map = new BMap.Map('map');
    const point = new BMap.Point(114.123230, 22.611475);
    map.centerAndZoom(point, 16);
    map.enableScrollWheelZoom(true);
    map.setMapType(BMAP_HYBRID_MAP);
  }

}
