import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  paisesPorRegiones: Country[]= [];

  regionActiva: string = '';


  activarRegion(region: any){
    this.paisService.buscarRegion(region)
    .subscribe(res => this.paisesPorRegiones = res)

  }


  constructor(private paisService: PaisService ) { }
  ngOnInit(): void {
  }

}
