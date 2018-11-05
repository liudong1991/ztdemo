import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MainComponent} from './main/main.component';
import {RoadInfoComponent} from './road-info/road-info.component';
import {RoadStaticsComponent} from './road-statics/road-statics.component';
import {MonitorLineListComponent} from './monitor-line-list/monitor-line-list.component';
import {MatTableModule} from '@angular/material/table';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {MatCardModule} from '@angular/material/card';
import {NgxEchartsModule} from 'ngx-echarts';
import {SegmentDetailComponent} from './segment-detail/segment-detail.component';
import {ArrangementDiagramComponent} from './arrangement-diagram/arrangement-diagram.component';
import {CrossSectionDiagramComponent} from './cross-section-diagram/cross-section-diagram.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {SitePhotosComponent} from './site-photos/site-photos.component';
import {TopographicInfoComponent} from './topographic-info/topographic-info.component';
import {MonitoringInfoComponent} from './monitoring-info/monitoring-info.component';
import {StatisticalInfoComponent} from './statistical-info/statistical-info.component';
import {HoleCurveComponent} from './hole-curve/hole-curve.component';
import {SurfaceCurveComponent} from './surface-curve/surface-curve.component';
import {CurveBasicInfoComponent} from './curve-basic-info/curve-basic-info.component';
import {HoleSensorListComponent} from './hole-sensor-list/hole-sensor-list.component';
import {DeepHoleCurveComponent} from './deep-hole-curve/deep-hole-curve.component';
import {DeepHoleSensorCurveComponent} from './deep-hole-sensor-curve/deep-hole-sensor-curve.component';
import {TimeSelectorComponent} from './time-selector/time-selector.component';
import {MyDatePickerModule} from 'mydatepicker';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoadInfoComponent,
    RoadStaticsComponent,
    MonitorLineListComponent,
    SegmentDetailComponent,
    ArrangementDiagramComponent,
    CrossSectionDiagramComponent,
    BasicInfoComponent,
    SitePhotosComponent,
    TopographicInfoComponent,
    MonitoringInfoComponent,
    StatisticalInfoComponent,
    HoleCurveComponent,
    SurfaceCurveComponent,
    CurveBasicInfoComponent,
    HoleSensorListComponent,
    DeepHoleCurveComponent,
    DeepHoleSensorCurveComponent,
    TimeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    SwiperModule,
    MatCardModule,
    NgxEchartsModule,
    MyDatePickerModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
