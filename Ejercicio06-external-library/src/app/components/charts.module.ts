import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCovidService } from '../api-covid.service';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsComponent } from '../pages/charts/charts.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  providers: 
  [
    ApiCovidService
  ],
  exports: [
    ChartsComponent
  ]
})
export class ChartsModule { }
