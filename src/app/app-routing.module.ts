import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SegmentDetailComponent} from './segment-detail/segment-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/mainpage', pathMatch: 'full'},
  {path: 'mainpage', component: MainComponent},
  {path: 'segmentDetail', component: SegmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
