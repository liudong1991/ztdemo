import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SegmentDetailComponent} from './segment-detail/segment-detail.component';
import {HoleCurveComponent} from './hole-curve/hole-curve.component';
import {SurfaceCurveComponent} from './surface-curve/surface-curve.component';

const routes: Routes = [
  {path: '', redirectTo: 'mainpage', pathMatch: 'full'},
  {path: 'mainpage', component: MainComponent},
  {path: 'segmentDetail', component: SegmentDetailComponent},
  {path: 'holeCurve', component: HoleCurveComponent},
  {path: 'surfaceCurve', component: SurfaceCurveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
