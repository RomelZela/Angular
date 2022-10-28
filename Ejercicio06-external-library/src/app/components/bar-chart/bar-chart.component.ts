import {  Component, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType} from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import { ApiCovidService } from '../../api-covid.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor(private apiCovid: ApiCovidService) {

    this.apiCovid.getDataTotalCases()
     

  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Casos registrados' },
      { data: [], label: 'Muertes registradas' }
    ]
  };



  


  ngOnInit(): void { 
setInterval( () => {
  
  this.barChartData.datasets[0].data = this.apiCovid.covidTotalCases
  this.barChartData.datasets[1].data = this.apiCovid.covidTotalDeaths
  this.barChartData.labels = this.apiCovid.covidCountry  
  
  this.chart?.update()
},500)
    
  }
  


}
