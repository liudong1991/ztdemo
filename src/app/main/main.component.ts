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

    let map = new BMap.Map('map');
    let point = new BMap.Point(102.2429, 24.3926);
    let point2 = new BMap.Point(102.45066, 24.190503);
    map.centerAndZoom(point, 13);
    map.enableScrollWheelZoom(true);
    map.setMapType(BMAP_HYBRID_MAP);
    let marker = new BMap.Marker(point);
    let marker2 = new BMap.Marker(point2);
    map.addOverlay(marker);
    map.addOverlay(marker2);

    var driving = new BMap.DrivingRoute(map, {
      renderOptions: {map: map, autoViewport: true},
      onMarkersSet: function (routes) {
        map.removeOverlay(routes[0].marker); //删除起点
        map.removeOverlay(routes[1].marker);//删除终点
      }
    });

    driving.search(point, point2);

  }

}
