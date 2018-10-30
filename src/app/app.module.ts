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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoadInfoComponent,
    RoadStaticsComponent,
    MonitorLineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
